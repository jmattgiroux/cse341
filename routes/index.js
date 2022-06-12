// routes are just code for handling urls
// see here: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("Hi Jay Giroux!");

});

module.exports = router;