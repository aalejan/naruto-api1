

const CharactersVillages = (connection, Sequelize, Characters, Villages) => {
    return connection.define('charactersVillages', {
      characterId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: Characters, key: 'id' } },
      villageId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: Villages, key: 'id' } },
    }, { paranoid: true })
  }
  
  module.exports = CharactersVillages