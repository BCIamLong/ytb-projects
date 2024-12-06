require("dotenv").config();
// const { create } = require("express-handlebars");
const express = require("express");
const Email = require("./utils/Email");
const hbs = require("./config/template");
// const path = require("path");

const app = express();
// const hbs = create({ defaultLayout: false });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "views");
// app.set("views", path.join(__dirname, "views"));

app.get("/send-email", (req, res) => {
  const email = new Email();
  email.sendEmail();
  res.send("Send email success");
  // res.render("welcome", { user: { name: "user 1" } });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Servicer is listening"));

console.log("Send Email in NodeJS, ExpressJS | NodeMailer | Mailtrap");

console.warn("Just 8 minutes!");
