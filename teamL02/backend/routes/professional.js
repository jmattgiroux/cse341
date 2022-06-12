/*
 * File uses code and insights from
 * https://github.com/byui-cse/cse341-code-student/blob/L02-team-solution-stretch/backend/controllers/professional.js
 */

const router = require('express').Router();
const professionalController = require('../controllers/professional');

// GET /feed/posts
router.get('/', professionalController.getData);
// localhost:8080/professional/
module.exports = router;