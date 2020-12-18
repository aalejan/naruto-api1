'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('characters', [
      {
        id: 1,
        name: 'Naruto Uzumaki',
      },
      {
        id: 2,
        name: 'Madara Uchia',
      },
      {
        id: 3,
        name:'Sasuke Uchia',
      },
      {
        id: 4,
        name: 'Hashirama Senju' ,
      },
      {
        id: 5,
        name: 'Gara',
      },
      {
        id: 6,
        name: 'Rasa',
      },
      {
        id: 7,
        name: 'Sasori',
      },
      {
        id: 8,
        name: 'Akasuchi',
      },
      {
        id: 9,
        name: 'Onoki',
      },
      {
        id: 10,
        name: 'Roshi',
      },
      {
        id: 11,
        name: 'A (Fourth Raikage)',
      },
      {
        id: 12,
        name: 'Killer Bee',
      },
      {
        id: 13,
        name: 'A (Third Raikage)',
      },
      {
        id: 14,
        name: 'Pain',
      },
      {
        id: 15,
        name: 'Konan',
      },
      {
        id: 16,
        name: 'Hanzo',
      },
      {
        id: 17,
        name: 'Zabuza',
      },
      {
        id: 18,
        name: 'Kisame',
      },
      {
        id: 19,
        name: 'Suigetsu',
      },
      {
        id: 20,
        name: 'Orochimaru',
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.bulkDelete('characters')
  }
};
