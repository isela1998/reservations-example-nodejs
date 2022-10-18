const express = require('express');

// Controllers
const {
  getAllReservations,
  registerNewReservation,
  updateReservation,
  deleteReservation,
} = require('../controllers/reservations.controller');

// Middlewares
const { validateReservation } = require('../middlewares/find.middleware');

const {
  newReservationValidators,
} = require('../middlewares/validators.middleware');

const reservationsRouter = express.Router();

reservationsRouter.get('/', getAllReservations);

reservationsRouter.post('/', newReservationValidators, registerNewReservation);

reservationsRouter.patch('/:id', validateReservation, updateReservation);

reservationsRouter.delete('/:id', validateReservation, deleteReservation);

module.exports = { reservationsRouter };
