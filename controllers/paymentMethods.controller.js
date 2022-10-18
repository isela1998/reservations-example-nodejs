// Models
const { PaymentMethod } = require('../models/paymentMethod.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');

// Add new payment method
const registerPaymentMethod = catchAsync(async (req, res, next) => {
  const { name } = req.body;

  const newPaymentMethod = await PaymentMethod.create({
    name,
  });

  // Send success response
  return res.status(201).json({
    status: 'success',
    data: { newPaymentMethod },
  });
});

// Get all payment method
const getAllPaymentMethods = catchAsync(async (req, res, next) => {
  const paymentMethods = await PaymentMethod.findAll();

  return res.status(200).json({
    status: 'success',
    data: { paymentMethods },
  });
});

// IMPORTANT:
// Then we can add: Update payment method, Delete payment method, Get payment method by id and others... ♥

module.exports = {
  registerPaymentMethod,
  getAllPaymentMethods,
};
