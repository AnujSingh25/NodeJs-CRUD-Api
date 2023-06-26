var db = require('../models')
var User = db.User

var addUser = async (req, res) => {
    const jane = User.build({ firstName: "OM", lastName: "singh" })
    await jane.save()
    // res.status(200).json(jane.toJson())
}
module.exports = { addUser }