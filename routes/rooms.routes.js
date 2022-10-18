const express = require('express');

// Controllers
const {
  registerNewRoom,
  getAllRooms,
} = require('../controllers/rooms.controller');

// Middlewares
const { newRoomValidators } = require('../middlewares/validators.middleware');

const roomsRouter = express.Router();

roomsRouter.post('/', newRoomValidators, registerNewRoom);

roomsRouter.get('/', getAllRooms);

module.exports = { roomsRouter };
