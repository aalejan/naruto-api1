'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('powerstats', [
      {
       id: 1,
       attackPotency: 'Universe Level+',
       speed: 'Massively Faster Than Light',
       characterId: 1 
      },
      {
        id: 2,
        attackPotency: 'Planet Level',
        speed: 'Massively Faster Than Light',
        characterId: 2
       },
       {
        id: 3,
        attackPotency: 'Universe Level +',
        speed: 'Massively Faster Than Light',
        characterId: 3
       },
       {
        id: 4,
        attackPotency: 'Multi-Contenent Level',
        speed: 'Relativistic',
        characterId: 4
       },
       {
        id: 5,
        attackPotency: 'Mountain Level+',
        speed: 'Massively Hypersonic+',
        characterId: 5
       },
       {
        id: 6,
        attackPotency: 'Mountain Level',
        speed: 'Massively Hypersonic+',
        characterId:  6
       },
       {
        id: 7,
        attackPotency: 'Town Level',
        speed: 'Massively Hypersonic',
        characterId: 7
       },
       {
        id: 8,
        attackPotency: 'Multi-City Block Level',
        speed: 'Hypersonic',
        characterId: 8
       },
       {
        id: 9,
        attackPotency: 'Mountain Level+',
        speed: 'Massively Hypersonic',
        characterId: 9
       },
       {
        id: 10,
        attackPotency: 'Island Level',
        speed: 'Massively Hypersonic+',
        characterId: 10
       },
       {
        id: 11,
        attackPotency: 'Mountain Level+',
        speed: 'Sub-Relativistic',
        characterId: 11
       },
       {
        id: 12,
        attackPotency: 'Small Country Level',
        speed: 'Sub-Relativistic',
        characterId: 12
       },
       {
        id: 13,
        attackPotency: 'Island Level',
        speed: 'Sub-Relativistic',
        characterId: 13
       },
       {
        id: 14,
        attackPotency: 'Island Level',
        speed: 'Sub-Relativistic',
        characterId: 14
       },
       {
        id: 15,
        attackPotency: 'Large Mountain Level',
        speed: 'Massively Hypersonic',
        characterId: 15
       },
       {
        id: 16,
        attackPotency: 'Town Level',
        speed: 'Massively Hypersonic+',
        characterId: 16
       },
       {
        id: 17,
        attackPotency: 'Town Level',
        speed: 'Massively Hypersonic+',
        characterId: 17
       },
       {
        id: 18,
        attackPotency: 'Mountain Level+',
        speed: 'Sub-Relativistic',
        characterId: 18
       },
       {
        id: 19,
        attackPotency: 'Town Level',
        speed: 'Massively Hypersonic+',
        characterId: 19
       },
       {
        id: 20,
        attackPotency: 'Mountain Level+',
        speed: 'Massively Hypersonic+',
        characterId: 20
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
    return queryInterface.bulkDelete('powerstats')
  }
};
