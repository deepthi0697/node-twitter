const express = require('express')
const route = express.Router()

const tweetsController = require('../App/Controller/tweetsController')

route.get('/user/:username', tweetsController.list)
//route.post('/user/:username', tweetsController.create)

module.exports = route