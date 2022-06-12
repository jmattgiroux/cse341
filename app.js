// Heroku Test Deployment
// Resource used: https://www.freecodecamp.org/news/how-to-deploy-an-application-to-heroku/
// This file uses code and insights from:
// https://github.com/byui-cse/cse341-code-student/blob/L02-personal-solution/app.js

const bodyParser = require("body-parser");
const mongoDatabase = require("./database/connect");

const app = require("express")();
const PORT = process.env.PORT || 8080;

app.use().use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use("/", require("./routes"));

mongoDatabase.initDatabase((error, mongoDatabase) => {
  if (error) {
    console.log(error);
  } else {
    app.listen(PORT);
    console.log(`Connected to database and listening on ${PORT}`);
  }
});
