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
        villageId: 1
      },
      {
        id: 2,
        name: 'Madara Uchia',
        villageId: 1
      },
      {
        id: 3,
        name:'Sasuke Uchia',
        villageId: 1
      },
      {
        id: 4,
        name: 'Hashirama Senju' ,
        villageId: 1
      },
      {
        id: 5,
        name: 'Gara',
        villageId: 7
      },
      {
        id: 6,
        name: 'Rasa',
        villageId: 7
      },
      {
        id: 7,
        name: 'Sasori',
        villageId: 7
      },
      {
        id: 8,
        name: 'Akatsuchi',
        villageId: 4
      },
      {
        id: 9,
        name: 'Onoki',
        villageId: 4
      },
      {
        id: 10,
        name: 'Roshi',
        villageId: 4
      },
      {
        id: 11,
        name: 'A (Fourth Raikage)',
        villageId: 3
      },
      {
        id: 12,
        name: 'Killer Bee',
        villageId: 3
      },
      {
        id: 13,
        name: 'A (Third Raikage)',
        villageId: 3
      },
      {
        id: 14,
        name: 'Nagato (Pain)',
        villageId: 5
      },
      {
        id: 15,
        name: 'Konan',
        villageId: 5
      },
      {
        id: 16,
        name: 'Hanzo',
        villageId: 5
      },
      {
        id: 17,
        name: 'Zabuza',
        villageId: 2
      },
      {
        id: 18,
        name: 'Kisame',
        villageId: 2
      },
      {
        id: 19,
        name: 'Suigetsu',
        villageId: 2
      },
      {
        id: 20,
        name: 'Orochimaru',
        villageId: 6
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