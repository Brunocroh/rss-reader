var FeedParser = require('feedparser');
var request = require('request');
var feed = 'http://pox.globo.com/rss/g1/';

var feedparser = new FeedParser();

request(feed).pipe(feedparser);

feedparser.on('error',function(err){
    console.error(err);
});


feedparser.on('meta',function(meta){
    console.error("Meta = "+meta);
});

feedparser.on('readable', function () {
    var meta = this.meta;
    var item;

    while (item = this.read()) {
        console.log(item);
    }
});
