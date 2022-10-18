const express = require('express');

// Controllers
const {
  registerPaymentMethod,
  getAllPaymentMethods,
} = require('../controllers/paymentMethods.controller');

// Middlewares
const {
  newPaymentMethodValidators,
} = require('../middlewares/validators.middleware');

const paymentMethodsRouter = express.Router();

paymentMethodsRouter.post(
  '/',
  newPaymentMethodValidators,
  registerPaymentMethod
);

paymentMethodsRouter.get('/', getAllPaymentMethods);

module.exports = { paymentMethodsRouter };
