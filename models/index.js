const Sequelize = require('sequelize')
const CharactersModel = require('./characters')
const VillagesModel = require('./villages')
const TechniquesModel = require('./techniques')
const PowerstatsModel = require('./powerstats')


const connection = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'us-cdbr-east-04.cleardb.com', dialect: 'mysql'
})


const Characters = CharactersModel(connection, Sequelize)
const Villages = VillagesModel(connection, Sequelize, Characters)
const Techniques = TechniquesModel(connection, Sequelize, Characters)
const Powerstats = PowerstatsModel(connection, Sequelize, Characters)


Techniques.belongsTo(Characters)
Characters.hasMany(Techniques)

Characters.hasMany(Powerstats)
Powerstats.belongsTo(Characters)

Characters.belongsTo(Villages)
Villages.hasMany(Characters)



module.exports = { Characters, Villages, Techniques, Powerstats }

module.exports = {
  Characters,
  Villages,
  Techniques,
  Powerstats,
  Op: Sequelize.Op,
}
