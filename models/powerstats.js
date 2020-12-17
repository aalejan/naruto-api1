const Powerstats = (connection , Sequelize, Characters) => {
    return connection.define('powerstats', {
        id: {type : Sequelize.INTEGER, auto_increment: true, primaryKey: true },
        attackPotency: { type: Sequelize.STRING },
        speed: { type: Sequelize.STRING },
        characterId: { type: Sequelize.INTEGER, references: { model: Characters, key: 'id' }}      
    }, { paranoid: true })
}