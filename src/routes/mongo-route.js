const ObjectID = require("mongodb").ObjectID;
const router = require("express").Router();
const { mongoConnect } = require("../services/mongo");

router.get("/", async (req, res) => {
  const db = mongoConnect();
  const fetchedTodos = await db.collection("todos").find().toArray();
  console.log(fetchedTodos);
  const todos = fetchedTodos.map((item) => ({ ID: item._id, ...item }));
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
    .findOne({ _id: ObjectID(req.params.id) });
  console.log(fetchedTodo);
  res.render("edit", {
    model: fetchedTodo,
  });
});

router.post("/edit/:id", async (req, res) => {
  const db = mongoConnect();
  db.collection("todos")
    .updateOne({ _id: ObjectID("6284054c043cbf3ac0bf4a71"), Title: "Title" })
    .then((result) => {
      console.log("A todo has been edited");
      res.redirect("/");
    });
});

router.get("/delete/:id", (req, res) => {
  const db = mongoConnect();
  db.collection("todos")
    .deleteOne({ _id: ObjectID(req.params.id) })
    .then((result) => {
      console.log("A todo has been deleted");
      res.redirect("/");
    });
});

module.exports = router;
