const express = require('express')
const bodyparser = require('body-parser')
require('./models')

var userCtrl = require('./controller/userController')

const app = express()

app.use(bodyparser.json())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/users', userCtrl.getUsers)
app.get('/users/:id', userCtrl.getUser)

app.post('/users', userCtrl.postUsers)

app.delete('/users/:id', userCtrl.delUsers)

app.listen(3000, () => {
    console.log('Server is listening');
})

