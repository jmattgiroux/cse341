const routes = require('express').Router();

routes.get("/", (req, res) => {
    res.send("Jay Giroux");

});

module.exports = routes;