const ObjectId = require("mongodb").ObjectId;
const router = require("express").Router();
const { mongoConnect } = require("../services/mongo");

router.get("/", async (req, res) => {
  const db = mongoConnect();
  const fetchedTodos = await db.collection("todos").find().toArray();
  console.log(fetchedTodos);
  const todos = fetchedTodos.map((item) => ({ ID: item._id, ...item }));
  console.log(todos);
  res.render("index", { model: todos });
});

router.get("/create", (req, res) => {
  res.render("create", { model: {} });
});

router.post("/create", async (req, res) => {
  const db = mongoConnect();
  db.collection("todos")
    .insertOne({ Title: req.body.Title })
    .then((result) => {
      console.log("A todo has been added");
      res.redirect("/");
    });
});

router.get("/edit/:id", async (req, res) => {
  const db = mongoConnect();
  const fetchedTodo = await db
    .collection("todos")
    .findOne({ _id: ObjectId(req.params.id) });
  // console.log(fetchedTodo);
  // console.log(fetchedTodo.Title);
  // console.log(req.params.id);
  res.render("edit", {
    model: { ID: req.params.id, Title: fetchedTodo.Title },
    // model: fetchedTodo,
  });
});

router.post("/edit/:id", async (req, res) => {
  const db = mongoConnect();
  db.collection("todos")
    .updateOne(
      { _id: ObjectId(req.params.id) },
      { $set: { Title: req.body.Title } }
    )
    .then((result) => {
      console.log("A todo has been edited");
      console.log(result);
      res.redirect("/");
    });
});

router.get("/delete/:id", (req, res) => {
  const db = mongoConnect();
  db.collection("todos")
    .deleteOne({ _id: ObjectId(req.params.id) })
    .then((result) => {
      console.log("A todo has been deleted");
      res.redirect("/");
    });
});

module.exports = router;
