const Characters = (connection , Sequelize) => {
    return connection.define('characters', {
        id: {type : Sequelize.INTEGER, auto_increment: true, primaryKey: true },
        name: { type: Sequelize.STRING },      
    }, { paranoid: true })
}

module.exports = Characters