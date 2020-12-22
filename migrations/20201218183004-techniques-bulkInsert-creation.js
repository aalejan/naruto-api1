'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('techniques', [
      {
        id: 1,
        name: 'Multi-Shadow Clone Jutsu',
        characterId: 1
      },
      {
        id: 2,
        name: 'Susano',
        characterId: 2
      },
      {
        id: 3,
        name: 'Chidori',
        characterId: 3
      },
      {
        id: 4,
        name: 'True Several Thousand Hands',
        characterId: 4
      },
      {
        id: 5,
        name: 'Armor of Sand',
        characterId: 5
      },
      {
        id: 6,
        name: 'Gold Dust Wave',
        characterId: 6
      },
      {
        id: 7,
        name: 'Puppet Mastery',
        characterId: 7
      },
      {
        id: 8,
        name: 'Stone Wall',
        characterId: 8
      },
      {
        id: 9,
        name: 'Particle Style Jutsu',
        characterId: 9
      },
      {
        id: 10,
        name: 'Lava Release Chakra Mode',
        characterId: 10
      },
      {
        id: 11,
        name: 'Liger Bomb',
        characterId: 11
      },
      {
        id: 12,
        name: 'Kenjutsu',
        characterId: 12
      },
      {
        id: 13,
        name: 'One-Finger Nukite',
        characterId: 13
      },
      {
        id: 14,
        name: 'Chibaku Tensei',
        characterId: 14
      },
      {
        id: 15,
        name: 'Paper Rain Technique',
        characterId: 15
      },
      {
        id: 16,
        name: 'Summon Ibuse',
        characterId: 16
      },
      {
        id: 17,
        name: 'Water Prison Technique',
        characterId: 17
      },
      {
        id: 18,
        name: 'Samehada Fusion',
        characterId: 18
      },
      {
        id: 19,
        name: 'Drowning Water Blob Technique',
        characterId: 19
      },
      {
        id: 20,
        name: 'Reanimation Jutsu',
        characterId: 20
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
    return queryInterface.bulkDelete('techniques')
  }
};
