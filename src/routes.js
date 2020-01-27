const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SeacheController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SeacheController.index)

module.exports = routes;