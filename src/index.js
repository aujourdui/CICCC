const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

/* ---------------------------- setups and config --------------------------- */
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "templates");

/* ------------------------------- middleware ------------------------------- */
app.use("/api/members", require("../routes/members"));

app.get("/", (req, res) => res.render("index", { pageTitle: "Home Page" }));
app.get("/api/members", (req, res) =>
  res.render("members", { pageTitle: "Members Page" })
);

/* -------------------------------- listener -------------------------------- */
const PORT = process.env.PORT || 8000;
app.listen(PORT);
