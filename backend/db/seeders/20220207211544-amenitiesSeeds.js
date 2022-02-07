'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Amenities', [
     {
     spotId: 1,
     parking: false,
     kitchen: true,
     patio: false,
     gym: false,
     pool: false,
     hotTub: false,
     pets: true,
     createdAt: new Date(),
     updatedAt: new Date(),
   },
   {
    spotId: 2,
    parking: false,
    kitchen: true,
    patio: true,
    gym: false,
    pool: false,
    hotTub: false,
    pets: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    spotId: 3,
    parking: true,
    kitchen: true,
    patio: true,
    gym: true,
    pool: true,
    hotTub: true,
    pets: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    spotId: 4,
    parking: true,
    kitchen: true,
    patio: false,
    gym: true,
    pool: false,
    hotTub: false,
    pets: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    spotId: 5,
    parking: false,
    kitchen: true,
    patio: true,
    gym: false,
    pool: false,
    hotTub: false,
    pets: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    spotId: 6,
    parking: false,
    kitchen: true,
    patio: false,
    gym: false,
    pool: false,
    hotTub: false,
    pets: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    spotId: 7,
    parking: true,
    kitchen: true,
    patio: false,
    gym: false,
    pool: false,
    hotTub: false,
    pets: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    spotId: 8,
    parking: true,
    kitchen: true,
    patio: true,
    gym: false,
    pool: false,
    hotTub: false,
    pets: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    spotId: 9,
    parking: true,
    kitchen: true,
    patio: true,
    gym: false,
    pool: false,
    hotTub: false,
    pets: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    spotId: 10,
    parking: false,
    kitchen: true,
    patio: true,
    gym: false,
    pool: false,
    hotTub: false,
    pets: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    spotId: 11,
    parking: false,
    kitchen: true,
    patio: true,
    gym: false,
    pool: false,
    hotTub: false,
    pets: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    spotId: 12,
    parking: true,
    kitchen: true,
    patio: true,
    gym: false,
    pool: false,
    hotTub: true,
    pets: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Amenities', null, {});
  }
};
