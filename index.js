var app = require('./config/custom-express')();
var mongoose = require('./config/mongoose');

app.listen(3000, function(){
    console.log("server uol");
});


var FeedParser = require('feedparser');
var request = require('request');
var utf8 = require('utf8');
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbURL = 'mongodb://localhost/feed';
mongoose.connect(dbURL);

var feed = 'http://www.canalrural.com.br/pt/rss/news/LAST/rss.xml';

var RssSchema = new Schema({}, { strict: false  });
var Rss  = mongoose.model('Rss', RssSchema);


var feedparser = new FeedParser();

request(feed).pipe(feedparser);

feedparser.on('error',function(err){
    console.error("ERRO FOI : "+err);
});


feedparser.on('meta',function(meta){
    console.error("Meta = "+meta);
});

feedparser.on('readable', function () {
    var meta = this.meta;
    var item;
//    console.log(this.read());
//    while (item = this.read()) {
//        var rss = new Rss(item);
//        console.log(item);
//    }
});
