'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    numberOfGuests: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Spot, { foreignKey: 'spotId' })
    Booking.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Booking;
};