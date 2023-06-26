const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize("spotify", "root", "1234", {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate();
    console.log("Connection succes")
} catch (error) {
    console.error(error)
}

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.contact = require('./contact')(sequelize, DataTypes)
db.User = require('./user')(sequelize, DataTypes)

sequelize.sync({ force: true })

module.exports = db