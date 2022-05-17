const uuid = require("uuid");
const router = require("express").Router();
const { client } = require("../services/redis");

router.get("/", async (req, res) => {
  try {
    const todos = [];
    // const todos = await client.hGetAll('todos')
    // console.log(todos);

    for await (const { field, value } of client.hScanIterator("todos")) {
      todos.push({ ID: field, Title: value });
    }

    res.render("index", { model: todos });
  } catch (e) {
    console.error(e);
  }
});

router.get("/create", (req, res) => {
  res.render("create", { model: {} });
});

router.post("/create", async (req, res) => {
  await client.hSet("todos", uuid.v4(), req.body.Title);
  res.redirect("/");
});

router.get("/edit/:id", async (req, res) => {
  const result = await client.hGet("todos", req.params.id);
  console.log(req.params.id);
  res.render("edit", {
    model: {
      ID: req.params.id,
      Title: result,
    },
  });
});

router.post("/edit/:id", async (req, res) => {
  await client.hSet("todos", req.params.id, req.body.Title);
  console.log(req.body.title);
  res.redirect("/");
});

router.get("/delete/:id", async (req, res) => {
  await client.hDel("todos", req.params.id);
  res.redirect("/");
});

module.exports = router;
