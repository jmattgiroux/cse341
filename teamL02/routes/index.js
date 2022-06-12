const routes = require('express').Router();

routes.get("/", (req, res) => {
    res.send('./backend/professional.json');

});

module.exports = routes;