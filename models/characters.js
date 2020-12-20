const Characters = (connection , Sequelize, Villages) => {
    return connection.define('characters', {
        id: {type : Sequelize.INTEGER, auto_increment: true, primaryKey: true },
        name: { type: Sequelize.STRING },
        villageId: {type: Sequelize.INTEGER, primaryKey: true, references: { model: Villages, key: 'id' } }      
    }, { paranoid: true })
}

module.exports = Characters