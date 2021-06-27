'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Farmers', [{
      document: '65.534.569/0120-17',
      documentType:  'CNPJ',
      name: 'Carlos',
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
