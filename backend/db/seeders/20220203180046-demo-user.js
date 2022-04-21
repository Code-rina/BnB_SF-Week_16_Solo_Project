'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Jane Fonda',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'Kaja Wiener',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'Mary Poppins',
        hashedPassword: bcrypt.hashSync('password3')
      },
      { 
        email: 'bill.adams@user.io',
        username: 'Bill Adams',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        email: 'adam.lovett@user.io',
        username: 'Adam Lovett',
        hashedPassword: bcrypt.hashSync('password5')
      },
      {
        email: 'jdrichards@user.io',
        username: 'JD Richards',
        hashedPassword: bcrypt.hashSync('password6')
      },
      {
        email: 'geoffotieno@user.io',
        username: 'Geoffrey Otieno',
        hashedPassword: bcrypt.hashSync('password7')
      },
      {
        email: 'thanhnguyen@user.io',
        username: 'Thanh Nguyen',
        hashedPassword: bcrypt.hashSync('password8')
      },
      {
        email: 'jordynsechrist@user.io',
        username: 'Jordyn Sechrist',
        hashedPassword: bcrypt.hashSync('password9')
      },
      {
        email: 'justinkreibich@user.io',
        username: 'Justin Kreibich',
        hashedPassword: bcrypt.hashSync('password10')
      },
      {
        email: 'susanweiner@user.io',
        username: 'Susan Weiner',
        hashedPassword: bcrypt.hashSync('password11')
      },
      {
        email: 'richardkreibich@user.io',
        username: 'Richard Kreibich',
        hashedPassword: bcrypt.hashSync('password12')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, {});   
  }
};