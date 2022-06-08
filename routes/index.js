const routes = require('express').Router();

routes.get("/", (req, res) => {
    res.send("Hi Jay Giroux!");

});

module.exports = routes;