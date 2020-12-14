

const CharactersVillages = (connection, Sequelize, Genres, Novels) => {
    return connection.define('charactersVillages', {
      characterId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: Characters, key: 'id' } },
      villageId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: Villages, key: 'id' } },
    }, { paranoid: true })
  }
  
  module.exports = CharactersVillages