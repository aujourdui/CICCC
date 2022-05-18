const router = require("express").Router();
const User = require("../models/user");

router.get("/", (req, res) => {
  res.status(200).json({ msg: "/ Route checker" });
});

router.get("/login", (req, res) => {
  let sess = req.session;

  if (sess.email) {
    return res.redirect("/api/admin");
  }
  res.render("login");
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = new User(email, password);
  user
    .validate()
    .then((result) => {
      console.log(result);
      req.session.email = email;
      res.end("logged in");
    })
    .catch((err) => {
      console.error("Login error", err);
      res.end("Register first");
    });

  // if (User.email === email && User.password === password) {
  //   req.session.email = req.body.email;
  //   res.end("logged in");
  // } else {
  //   res.end("Register first");
  // }
});

router.get("/register", (req, res) => {
  let sess = req.session;
  if (sess.email) {
    return res.redirect("/api/admin");
  }
  res.render("register");
});

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  const user = new User(email, password);
  user
    .save()
    .then((result) => {
      console.log(result);
      res.end("Registered");
    })
    .catch((err) => console.error("Register error", err));
});

router.get("/admin", (req, res) => {
  const { email } = req.session;
  if (email) {
    res.write(`
    <h1>Hello ${email}</h1>
    `);
    res.end();
  } else {
    res.end("Login first");
  }
});

router.post("/login", (req, res) => {
  req.session.email = req.body.email;
  res.end("logged in");
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return console.error(err);
    }
    res.redirect("/api/login");
  });
});

module.exports = router;
