// Heroku Test Deployment
// Resource used: https://www.freecodecamp.org/news/how-to-deploy-an-application-to-heroku/

const app = require("express")();
const PORT = process.env.PORT || 8080;

app.use("/", require("./routes"));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);

});

// Instructor's solution below:

// const express = require('express');
// const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// const mongodb = require('./db/connect');
// const professionalRoutes = require('./routes/professional');

// const port = process.env.PORT || 8080;
// const app = express();

// app
//   .use(bodyParser.json())
//   .use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//   })
//   .use('/professional', professionalRoutes);

// mongodb.initDb((err, mongodb) => {
//   if (err) {
//     console.log(err);
//   } else {
//     app.listen(port);
//     console.log(`Connected to DB and listening on ${port}`);
//   }
// });