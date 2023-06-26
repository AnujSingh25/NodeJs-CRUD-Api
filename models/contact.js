module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("Contacts", {
        address: {
            type: DataTypes.STRING
        },
        mobile: {
            type: DataTypes.INTEGER
        }
    }, {
    })

    return Contact
}