'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    spotId: DataTypes.INTEGER,
    parking: DataTypes.BOOLEAN,
    kitchen: DataTypes.BOOLEAN,
    patio: DataTypes.BOOLEAN,
    gym: DataTypes.BOOLEAN,
    pool: DataTypes.BOOLEAN,
    hotTub: DataTypes.BOOLEAN,
    pets: DataTypes.BOOLEAN
  }, {});
  Amenity.associate = function(models) {
    Amenity.belongsTo(models.Spot, { foreignKey: 'spotId' })
  };
  return Amenity;
};