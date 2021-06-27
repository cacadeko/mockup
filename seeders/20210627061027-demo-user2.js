'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Farmers', [{
      document: '53.875.657/0004-14',
      documentType:  'CNPJ',
      name: 'Liam',
      street: 'Example Street',
      state: 'CA',
      country: 'US',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Farmers', null, {});
  }
};
