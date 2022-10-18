// Models
const { Reservation } = require('../models/reservation.model');
const { Room } = require('../models/room.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');

// Register new reservation
const registerNewReservation = catchAsync(async (req, res, next) => {
  const { clientId, roomId, days, paymentMethodId } = req.body;

  const room = await Room.findOne({
    where: { id: roomId, status: 'available' },
  });

  if (!room) {
    return next(
      new AppError(
        'Sorry, the room does not exist or has already been reserved',
        404
      )
    );
  }

  const amount = room.pricePerDay * days;

  const newReservation = await Reservation.create({
    clientId,
    roomId,
    days,
    amount,
    paymentMethodId,
  });

  await room.update({ status: 'reserved' });

  // Send success response
  return res.status(201).json({
    status: 'success',
    data: { newReservation },
  });
});

// Update reservation when was paid
const updateReservation = catchAsync(async (req, res, next) => {
  const { reservation } = req;

  // Using a model's instance
  await reservation.update({ status: 'paid' });

  return res.status(200).json({
    status: 'success',
    data: { reservation },
  });
});

// Delete order when was paid
const deleteReservation = catchAsync(async (req, res, next) => {
  const { reservation } = req;
  // Soft delete
  await reservation.update({ status: 'deleted' });

  const room = await Room.findOne({ where: { id: reservation.roomId } });
  await room.update({ status: 'available' });

  return res.status(204).json({ status: 'success' });
});

// Get all reservation
const getAllReservations = catchAsync(async (req, res, next) => {
  const reservations = await Reservation.findAll();

  return res.status(200).json({
    status: 'success',
    data: { reservations },
  });
});

module.exports = {
  registerNewReservation,
  updateReservation,
  deleteReservation,
  getAllReservations,
};
