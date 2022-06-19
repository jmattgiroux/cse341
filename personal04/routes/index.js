// routes are just code for handling urls
// see here: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
// This file uses code and insights from:
// https://github.com/byui-cse/cse341-code-student/blob/L02-personal-solution/routes/index.js

const router = require("express").Router();

router.use("/contacts", require("./contacts"));
router.use("/api-docs", require("./swagger"));
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
