'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Images', [
     {
     spotId: 1,
     url: "https://a0.muscache.com/im/pictures/4d6d2120-37ab-4d15-a5b5-64ba2ca84920.jpg?im_w=1200",
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    spotId: 2,
    url: "https://a0.muscache.com/im/pictures/31acb5cd-16c3-47c9-99c0-6b8bfc8fc43c.jpg?im_w=1440",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    spotId: 3,
    url: "https://a0.muscache.com/im/pictures/33426b6c-ae21-4abe-acc5-2a6eac7c010e.jpg?im_w=1200",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    spotId: 4,
    url: "https://a0.muscache.com/im/pictures/miso/Hosting-45926638/original/35b11206-c91f-4d82-a3c6-9cde6782cde4.png?im_w=1200",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    spotId: 5,
    url: "https://a0.muscache.com/im/pictures/ffb0536c-3fc5-4398-9be3-ec8ffe634961.jpg?im_w=1440",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    spotId: 6,
    url: "https://a0.muscache.com/im/pictures/0823e0cf-9df1-44af-8545-29c05d8329b2.jpg?im_w=1200",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    spotId: 7,
    url: "https://a0.muscache.com/im/pictures/15af1e4e-8875-49e3-a56e-1f5c343ba8a5.jpg?im_w=1440",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    spotId: 8,
    url: "https://a0.muscache.com/im/pictures/67932933-12a2-4199-928b-f8304b9c8a09.jpg?im_w=1440",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    spotId: 9,
    url: "https://a0.muscache.com/im/pictures/miso/Hosting-49161676/original/84e12872-6840-4c5a-9724-439543d4b08f.jpeg?im_w=1200",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    spotId: 10,
    url: "https://a0.muscache.com/im/pictures/6b41c0ac-2f7e-4b13-9576-a867cabe09db.jpg?im_w=1200",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    spotId: 11,
    url: "https://a0.muscache.com/im/pictures/miso/Hosting-562593/original/551e9c04-3f52-4dd8-97df-948f2a469520.jpeg?im_w=1200",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    spotId: 12,
    url: "https://a0.muscache.com/im/pictures/ff0fb0f5-1071-4497-ad8d-0bfe459fb133.jpg?im_w=1440",
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
   return queryInterface.bulkDelete('Images', null, {});
  }
};
