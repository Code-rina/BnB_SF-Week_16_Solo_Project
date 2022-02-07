'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'bill.adams@user.io',
        username: 'billadams',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        email: 'adam.lovett@user.io',
        username: 'adamlovett',
        hashedPassword: bcrypt.hashSync('password5')
      },
      {
        email: 'jdrichards@user.io',
        username: 'jdrichards',
        hashedPassword: bcrypt.hashSync('password6')
      },
      {
        email: 'geoffotieno@user.io',
        username: 'geoffreyotieno',
        hashedPassword: bcrypt.hashSync('password7')
      },
      {
        email: 'thanhnguyen@user.io',
        username: 'thanhnguyen',
        hashedPassword: bcrypt.hashSync('password8')
      },
      {
        email: 'jordynsechrist@user.io',
        username: 'jordynsechrist',
        hashedPassword: bcrypt.hashSync('password9')
      },
      {
        email: 'justinkreibich@user.io',
        username: 'justinkreibich',
        hashedPassword: bcrypt.hashSync('password10')
      },
      {
        email: 'susanweiner@user.io',
        username: 'susanweiner',
        hashedPassword: bcrypt.hashSync('password11')
      },
      {
        email: 'richardkreibich@user.io',
        username: 'richardkreibich',
        hashedPassword: bcrypt.hashSync('password8')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};