// Models
const { Client } = require('../models/client.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');

// Register new client
const registerNewClient = catchAsync(async (req, res, next) => {
  const { name, nif, address, phone, email } = req.body;

  const newClient = await Client.create({
    name,
    nif,
    address,
    phone,
    email,
  });

  // Send success response
  return res.status(201).json({
    status: 'success',
    data: { newClient },
  });
});

// Get all clients
const getAllClients = catchAsync(async (req, res, next) => {
  const clients = await Client.findAll();

  return res.status(200).json({
    status: 'success',
    data: { clients },
  });
});

// IMPORTANT:
// Then we can add: Update client, Delete client, Get client by id and others... ♥

module.exports = {
  registerNewClient,
  getAllClients,
};
