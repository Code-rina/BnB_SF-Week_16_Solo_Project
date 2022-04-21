'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Bookings', [
    {
     spotId: 1,
     userId: 3,
     numberOfGuests: 2,
     startDate: new Date(),
     endDate: new Date(),
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      spotId: 2,
      userId: 4,
      numberOfGuests: 3,
      startDate: new Date(),
      endDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      spotId: 3,
      userId: 5,
      numberOfGuests: 4,
      startDate: new Date(),
      endDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      spotId: 6,
      userId: 7,
      numberOfGuests: 2,
      startDate: new Date(),
      endDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
     }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
