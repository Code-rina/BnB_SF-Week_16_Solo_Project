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
     startDate: '2021-12-05',
     endDate: '2021-12-12',
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      spotId: 2,
      userId: 4,
      numberOfGuests: 3,
      startDate: '2022-08-25',
      endDate: '2022-08-27',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      spotId: 3,
      userId: 5,
      numberOfGuests: 4,
      startDate: '2022-11-01',
      endDate: '2022-11-08',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      spotId: 6,
      userId: 7,
      numberOfGuests: 2,
      startDate: '2022-01-14',
      endDate: '2022-01-16',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      spotId: 4,
      userId: 1,
      numberOfGuests: 4,
      startDate: '2022-02-11',
      endDate: '2022-02-15',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      spotId: 3,
      userId: 1,
      numberOfGuests: 2,
      startDate: '2021-12-01',
      endDate: '2021-12-03',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      spotId: 7,
      userId: 1,
      numberOfGuests: 2,
      startDate: '2022-10-14',
      endDate: '2022-10-23',
      createdAt: new Date(),
      updatedAt: new Date()
     },
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
