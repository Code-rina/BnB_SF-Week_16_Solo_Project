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
     url: "https://photos.zillowstatic.com/fp/2fa5a5fa084a68af7ffc10811984f9d0-cc_ft_768.webp",
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    spotId: 2,
    url: "https://photos.zillowstatic.com/fp/cc2c8550c9da0a4b322f554f0b091e05-cc_ft_768.webp",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    spotId: 3,
    url: "https://photos.zillowstatic.com/fp/ae12399736d94a4122f0953cd4bc613e-uncropped_scaled_within_1536_1152.webp",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    spotId: 4,
    url: "https://cdn.onekindesign.com/wp-content/uploads/2012/01/San-Francisco-Loft-01-1-Kind-Design.jpg",
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
