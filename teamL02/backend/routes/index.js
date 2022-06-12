const routes = require('express').Router();

const data = require('./backend/professional.json');

routes.get("/", (req, res) => {
    res.send(data);

});

module.exports = routes;