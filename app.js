const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");
const app = express();

const PORT = 3000;

// DATABASE CONNECTION
mongoose
  .connect("mongodb://localhost:27017/books-app")
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => console.log(err));

// SET THE TEMPLATE ENGINE
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

// REGISTER THE PARTIAL
hbs.registerPartials(__dirname + "/views/partials");

// SET THE STATIC FOLDER FOR PUBLIC FILES
app.use(express.static(__dirname + "/public"));

// ROUTES
// GET   /books/add

// POST   /books/add

// GET   /books/details/:bookId

// GET  /

// GET /search?bookTitle=str&bookRating=str

// 404 page fallback route

// START THE SERVER
app.listen(PORT, () => console.log(`Server listening on port ${PORT} !`));
