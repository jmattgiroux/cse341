/*
 * File uses code and insights from
 * https://github.com/byui-cse/cse341-code-student/blob/L02-team-solution-stretch/backend/app.js
 */

const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const mongodb = require("./database/connect");
const professionalRoutes = require("./routes/professional");

const app = require("express")();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/professional", professionalRoutes);

// app.listen(8080);

mongodb.initDatabase((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(`Connected to DB and listening on ${PORT}`);
  }
});
