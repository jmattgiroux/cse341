// routes are just code for handling urls
// see here: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
// This file uses code and insights from:
// https://github.com/byui-cse/cse341-code-student/blob/L02-personal-solution/routes/index.js

const router = require('express').Router();

// .use() documentation: https://www.geeksforgeeks.org/express-js-router-use-function/
// router.use( path, function )
router.use("/contacts", require("./contacts"));

module.exports = router;