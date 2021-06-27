'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Farmers', [{
      document: '442.213.782.30',
      documentType:  'CPF',
      name: 'Richard',
      street: 'Example Street',
      state: 'SP',
      country: 'BR',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Farmers', null, {});
  }
};
