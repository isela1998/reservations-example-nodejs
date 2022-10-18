// Models
const { Reservation } = require('./reservation.model');
const { Client } = require('./client.model');
const { Room } = require('./room.model');
const { PaymentMethod } = require('./paymentMethod.model');

const associations = () => {
  Client.hasMany(Reservation, { foreignKey: 'clientId' });
  Reservation.belongsTo(Client);

  Room.hasOne(Reservation, { foreignKey: 'roomId' });
  Reservation.belongsTo(Room);

  PaymentMethod.hasOne(Reservation, { foreignKey: 'paymentMethodId' });
  Reservation.belongsTo(PaymentMethod);
};

module.exports = { associations };
