'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Farmers', [{
      document: '65.685.712/0001-13',
      documentType:  'CNPJ',
      name: 'Helena',
      street: 'Example Street',
      state: 'GO',
      country: 'BR',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Farmers', null, {});
  }
};
