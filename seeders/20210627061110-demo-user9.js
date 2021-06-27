'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Farmers', [{
      document: '681.613.798-32',
      documentType:  'CPF',
      name: 'Leo',
      street: 'Example Street',
      state: 'ON',
      country: 'CA',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Farmers', null, {});
  }
};
