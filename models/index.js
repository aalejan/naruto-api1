const Sequelize = require('sequelize')
const CharactersModel = require('./characters')
const VillagesModel = require('./villages')
const TechniquesModel = require('./techniques')
const CharacterVillagesModel = require('./characterVillages')
const PowerstatsModel = require('./powerstats')


const connection = new Sequelize('naruto', 'naruto', 'narutofan$', {
  host: 'localhost', dialect: 'mysql'
})


const Characters = CharactersModel(connection, Sequelize)
const Villages = VillagesModel(connection, Sequelize, Characters)
const Techniques = TechniquesModel(connection, Sequelize, Characters)
const CharacterVillages = CharacterVillagesModel(connection, Sequelize, Villages, Characters)
const Powerstats = PowerstatsModel(connection, Sequelize, Characters)

Characters.hasMany(Techniques)
Techniques.belongsTo(Characters)

Characters.hasMany(Powerstats)
Powerstats.belongsTo(Characters)

Villages.belongsToMany(Characters, { through: CharacterVillages})
Characters.belongsTo(Villages, { through: CharacterVillages })


module.exports = { Characters, Villages, Techniques, CharacterVillages, Powerstats }

module.exports = {
  Characters,
  Villages,
  Techniques,
  CharacterVillages,
  Powerstats,
  Op: Sequelize.Op,
}
