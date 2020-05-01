const mongoose = require('mongoose')

const setupDB = (req, res) => {
    mongoose.connect('mongodb+srv://deepthi:shaz7022@cluster0-7uxoi.mongodb.net/Twitter?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to DB')
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = setupDB