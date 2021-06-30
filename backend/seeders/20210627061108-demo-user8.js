'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Farmers', [{
      document: '268.524.861-41',
      documentType:  'CPF',
      name: 'Pedro',
      street: 'Example Street',
      state: 'AL',
      country: 'BR',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Farmers', null, {});
  }
};
