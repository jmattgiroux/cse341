const routes = require('express').Router();

const data = require('./backend/professional.json');

routes.get("/", (req, res) => {
    res.send(data);

});

module.exports = routes;

// instructor solution below:

// const express = require('express');

// const professionalController = require('../controllers/professional');

// const router = express.Router();

// // GET /feed/posts
// router.get('/', professionalController.getData);
// // localhost:8080/professional/
// module.exports = router;