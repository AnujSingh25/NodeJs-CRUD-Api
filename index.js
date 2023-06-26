const express = require('express')
const bodyparser = require('body-parser')
require('./models')

var userCtrl = require('./controller/userController')

const app = express()

app.use(bodyparser.json())



app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/add', userCtrl.addUser)

app.listen(3000, () => {
    console.log('Server is listening');
})

