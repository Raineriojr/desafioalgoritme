const express = require('express');

const routes = express.Router();

const clientController = require('./controllers/clientController');
const profileController = require('./controllers/profileController');
const filters = require('./controllers/filtersController');

routes.post('/login', profileController.login);

routes.post('/cadastro_cliente', clientController.create);
routes.get('/lista_clientes', clientController.index);
routes.post('/cliente/atualiza/:id', clientController.update);

// routes.get('/filtro', filters.index);
// routes.get('/filtros', filters.index2);

module.exports = routes;

