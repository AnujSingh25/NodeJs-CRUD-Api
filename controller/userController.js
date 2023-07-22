var db = require('../models')
var User = db.User

var addUser = async (req, res) => {
    const jane = await User.create({ firstName: "Santosh", lastName: "singh" })
    // const jane = User.build({ firstName: "Akhand", lastName: "singh" })
    // await jane.save()
    // await jane.update()
    // await jane.destroy()
    console.log(jane.toJSON());
    res.status(200).json(jane.toJSON())
}

var getUsers = async (req, res) => {
    const data = await User.findAll({})
    res.status(200).json({ data: data })
}

var getUser = async (req, res) => {
    const data = await User.findOne({
        where: {
            id: req?.params?.id
        }
    })
    res.status(200).json({ data: data })
}

var delUsers = async (req, res) => {
    const data = await User.destroy({
        where: {
            id: req?.params?.id
        }
    })
    res.status(200).json({ data: data })
}

var postUsers = async (req, res) => {
    var postData = req.body
    if (postData.length > 1) {
        var data = await User.bulkCreate(postData)
    } else {
        var data = await User.create(postData)
    }
    res.status(200).json({ data: data })
}


module.exports = { addUser, getUsers, getUser, postUsers, delUsers }