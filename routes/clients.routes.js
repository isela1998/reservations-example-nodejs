const express = require('express');

// Controllers
const {
  registerNewClient,
  getAllClients,
} = require('../controllers/clients.controller');

// Middlewares
const { newClientValidators } = require('../middlewares/validators.middleware');

const clientsRouter = express.Router();

clientsRouter.post('/', newClientValidators, registerNewClient);

clientsRouter.get('/', getAllClients);

module.exports = { clientsRouter };
