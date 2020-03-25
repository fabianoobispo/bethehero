const express = require('express');

const OngController = require('./controllers/OngControllers');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionsController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', sessionsController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);


 module.exports = routes