const Techniques = (connection , Sequelize) => {
    return connection.define('techniques', {
        id: {type : Sequelize.INTEGER, auto_increment: true, primaryKey: true },
        name: { type: Sequelize.STRING },
        characterId: { type: Sequelize.INTEGER, references: { model: Characters, key: 'id' }}      
    }, { paranoid: true })
}

module.exports = Techniques