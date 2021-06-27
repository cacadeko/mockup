'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Farmers', [{
      document: '69.541.464/0026-65',
      documentType:  'CNPJ',
      name: 'Noah',
      street: 'Example Street',
      state: 'NS',
      country: 'CA',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Farmers', null, {});
  }
};
