// Models
const { Room } = require('../models/room.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');

// Add new room register
const registerNewRoom = catchAsync(async (req, res, next) => {
  const { number, description, pricePerDay } = req.body;

  const newRoom = await Room.create({
    number,
    description,
    pricePerDay,
  });

  // Send success response
  return res.status(201).json({
    status: 'success',
    data: { newRoom },
  });
});

// Get all rooms
const getAllRooms = catchAsync(async (req, res, next) => {
  const rooms = await Room.findAll();

  return res.status(200).json({
    status: 'success',
    data: { rooms },
  });
});

// IMPORTANT:
// Then we can add: Update room, Delete room, Get room by id and others... ♥

module.exports = {
  registerNewRoom,
  getAllRooms,
};
