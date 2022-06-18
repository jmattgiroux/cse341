// routes are just code for handling urls
// see here: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
// This file uses code and insights from:
// https://github.com/byui-cse/cse341-code-student/blob/L02-personal-solution/routes/index.js

const router = require("express").Router();
// https://www.npmjs.com/package/swagger-ui-express
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

// .use() documentation: https://www.geeksforgeeks.org/express-js-router-use-function/
// router.use( path, function )

// from what I understand, if there's a request to the server for /contacts, then the stuff from contacts.js file will handle the request. For example, if the request is just .../contacts, then the getAllContacts function will be called in contacts.js. It seems we're making an API for our server.
router.use("/contacts", require("./contacts"));
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use(
  "/",
  (docData = (req, res) => {
    let docData = {
      documentationURL: "https://jmg-04-personal.herokuapp.com/api-docs/",
    };
    res.send(docData);
  })
);

module.exports = router;
