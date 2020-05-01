const twitter = require('twitter')
const tokens = require('./config/tokens')
var twit = new twitter(tokens)


var params = {
    q: 'from: BillGates',
    count: 10,
    result_type: 'recent',
    lang: 'en'
}

twit.get('search/tweets', params, (err, data, res) => {
    if(!err){
        for(let i =0; i < data.statuses.length; i++){
            res.json(data.statuses[i].text)
        }
    } else {
        res.json(err)
    }
})
