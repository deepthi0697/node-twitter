const Tweet = require('../Model/tweet')
const twitter = require('twitter')
const tokens = require('../../config/tokens')
var twit = new twitter(tokens)
const express = require('express')
const route = express.Router()


route.get('/user/:username', (req, res) => {
    const username = req.params.username;
    console.log('req params:' + req.params.name+ username)
    Tweet.find()
    .then((tweets) => {
        if(!tweets.includes(username)){
            var params = {
                q: `from: ${username}`,
                count: 10,
                result_type: 'recent',
                lang: 'en'
            }
            twit.get('search/tweets', params, (err, data, response) => {
                if(!err){
                    const tweets = data.statuses.map(tweet => {
                        return tweet.text
                    })
                    res.send(tweets)
                    const obj = new Tweet({
                        tweet: tweets,
                        username: req.params.username
                    })
                    obj.save()
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                } else {
                    res.json(err)
                }
            })
        } else if(tweets.includes(username)){
            res.json(tweets)
        } else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
   
})

module.exports = route
