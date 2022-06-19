const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

router.get('/', swaggerUi.setup(swaggerDocument), swaggerUi.serve);

module.exports = router;