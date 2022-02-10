'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Amenities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      spotId: {
        onDelete: 'CASCADE',
        hooks: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Spots" }
      },
      parking: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      kitchen: {
        allowNull: false,
        type: Sequelize.BOOLEAN  
      },
      patio: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      gym: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      pool: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      hotTub: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      pets: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Amenities');
  }
};