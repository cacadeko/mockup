'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Farmers', [{
      document: '97.576.425/0003-24',
      documentType:  'CNPJ',
      name: 'Jackson',
      street: 'Example Street',
      state: 'CT',
      country: 'US',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Farmers', null, {});
  }
};
