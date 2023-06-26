var db = require('../models')
var User = db.User

var addUser = async (req, res) => {
    const jane = await User.create({ firstName: "Santosh", lastName: "singh" })
    // const jane = User.build({ firstName: "Akhand", lastName: "singh" })
    // await jane.save()
    console.log(jane.toJSON());
    res.status(200).json(jane.toJSON())
}
module.exports = { addUser }