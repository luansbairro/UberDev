const { Router, response } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

routes.post('/devs', DevController.store);

module.exports = routes;