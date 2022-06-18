// app.js for personal 04 assignment

// most of code below was imported from Team L04 Assignment from CSE 341 Course
// https://www.npmjs.com/package/cors
const bodyParser = require("body-parser");
const cors = require("cors");
// https://www.npmjs.com/package/express
const express = require("express");
const app = express();

const mongoDatabase = require("./database/connect");

const PORT = process.env.PORT || 8080;

app
  .use(bodyParser.json())
  // .use(cors())
  // .use(express.json())
  // .use(express.urlencoded({ extended: true }))
  .use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "*"
      // "https://cse341-contacts-frontend.netlify.app/"
    );
    next();
  })
  .use("/", require("./routes"));

mongoDatabase.initDatabase((error, mongoDatabase) => {
  if (error) {
    console.log(error);
  } else {
    app.listen(PORT);
    console.log(`Connected to database and listening on ${PORT}`);
  }
});
