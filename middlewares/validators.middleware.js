const { body, validationResult } = require('express-validator');

// Utils
const { AppError } = require('../utils/appError.util');

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // [{ ..., msg }] -> [msg, msg, ...] -> 'msg. msg. msg. msg'
    const errorMessages = errors.array().map((err) => err.msg);

    const message = errorMessages.join('. ');

    return next(new AppError(message, 400));
  }

  next();
};

const newClientValidators = [
  body('name')
    .isString()
    .withMessage('Name must be a string')
    .notEmpty()
    .withMessage('Name cannot be empty'),
  body('nif')
    .isString()
    .withMessage('NIF must be a string')
    .notEmpty()
    .withMessage('NIF cannot be empty'),
  body('address')
    .isString()
    .withMessage('NIF must be a string')
    .notEmpty()
    .withMessage('NIF cannot be empty'),
  body('phone')
    .isString()
    .withMessage('Phone must be a string')
    .notEmpty()
    .withMessage('Phone cannot be empty'),
  body('email').isEmail().withMessage('Must provide a valid email'),
  checkValidations,
];

const newPaymentMethodValidators = [
  body('name')
    .isString()
    .withMessage('Name must be a string')
    .notEmpty()
    .withMessage('Name cannot be empty'),
  checkValidations,
];

const newRoomValidators = [
  body('number')
    .isString()
    .withMessage('Room number must be a string')
    .notEmpty()
    .withMessage('Room number cannot be empty'),
  body('description')
    .isString()
    .withMessage('Room description must be a string')
    .notEmpty()
    .withMessage('Room description cannot be empty'),
  body('pricePerDay')
    .isDecimal()
    .withMessage('Must provided a valid price')
    .notEmpty()
    .withMessage('Price cannot be empty'),
  checkValidations,
];

const newReservationValidators = [
  body('clientId')
    .isInt()
    .withMessage('Must provide a valid client id')
    .notEmpty()
    .withMessage('Client id cannot be empty'),
  body('roomId')
    .isInt()
    .withMessage('Must provide a valid room id')
    .notEmpty()
    .withMessage('Room id cannot be empty'),
  body('paymentMethodId')
    .isInt()
    .withMessage('Must provide a valid payment method id')
    .notEmpty()
    .withMessage('Payment method cannot be empty'),
  body('days')
    .isInt()
    .withMessage('Days must be a number')
    .notEmpty()
    .withMessage('Days cannot be empty'),
  checkValidations,
];

module.exports = {
  newClientValidators,
  newPaymentMethodValidators,
  newRoomValidators,
  newReservationValidators,
};
