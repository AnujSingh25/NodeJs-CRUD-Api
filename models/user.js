module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Users", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    })
    return User
}