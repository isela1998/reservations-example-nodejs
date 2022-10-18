const express = require('express');

// Controllers
const { globalErrorHandler } = require('./controllers/error.controller');

// Routers
const { clientsRouter } = require('./routes/clients.routes');
const { roomsRouter } = require('./routes/rooms.routes');
const { paymentMethodsRouter } = require('./routes/paymentMethods.routes');
const { reservationsRouter } = require('./routes/reservations.routes');

// Init express app
const app = express();

// Enable Express app to receive JSON data
app.use(express.json());

// Define endpoints
app.use('/api/v1/clients', clientsRouter);
app.use('/api/v1/rooms', roomsRouter);
app.use('/api/v1/payment/methods', paymentMethodsRouter);
app.use('/api/v1/reservations', reservationsRouter);

// Global error handler
app.use(globalErrorHandler);

// Catch non-existing endpoints
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
