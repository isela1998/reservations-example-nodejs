// Models
const { Reservation } = require('../models/reservation.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

const validateReservation = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const reservation = await Reservation.findOne({
    where: { id },
  });

  // If reservation doesn't exist, send error message
  if (!reservation) {
    return next(new AppError('Reservation not found', 404));
  }

  req.reservation = reservation;
  next();
});

module.exports = {
  validateReservation,
};
