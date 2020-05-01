const express = require('express')
const app = express()
const PORT = 3055
const routes = require('./App/Controller/tweetsController')
const setupDB = require('./config/setupDB')

setupDB()

app.use('/', routes)
app.listen(PORT, () => {
    console.log('listening on ', PORT)
})


