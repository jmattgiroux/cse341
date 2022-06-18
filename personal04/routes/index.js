// routes are just code for handling urls
// see here: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
// This file uses code and insights from:
// https://github.com/byui-cse/cse341-code-student/blob/L02-personal-solution/routes/index.js

const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

router.use("/contacts", require("./contacts"));
// router.use("/", require("./swagger"));
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
