
const Villages= (connection , Sequelize, Characters) => {
    return connection.define('villages', {
        id: {type : Sequelize.INTEGER, auto_increment: true, primaryKey: true },
        name: { type: Sequelize.STRING },
    }, { paranoid: true })
}

module.exports = Villages