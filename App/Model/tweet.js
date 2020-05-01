const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tweetSchema = new Schema({
    tweet: {
        type: Array,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

const Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet