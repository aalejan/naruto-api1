'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('villages', [
      {
        id: 1,
        name: 'Konahagakure'
      },
      {
        id: 2,
        name: 'Kirigakure'
      },
      {
        id: 3,
        name: 'Kumogakure'
      },
      {
        id: 4,
        name: 'Iwagakure'
      },
      {
        id: 5,
        name: 'Amegakure'
      },
      {
        id: 6,
        name: 'Otogakure'
      },
      {
        id: 7,
        name: 'Sunagakure'
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.bulkDelete('villages')
  }
};



