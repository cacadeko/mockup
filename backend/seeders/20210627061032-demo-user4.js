'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Farmers', [{
      document: '45.164.621/0035-10',
      documentType:  'CNPJ',
      name: 'Aiden',
      street: 'Example Street',
      state: 'NC',
      country: 'US',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Farmers', null, {});
  }
};
