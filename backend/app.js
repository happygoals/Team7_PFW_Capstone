//back end - express should connect to the database or server here.
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use((req, res, next) => {
  console.log("first 1");
  console.log(req.method);
  console.log(req.url)
  next();
});

module.exports = app;
