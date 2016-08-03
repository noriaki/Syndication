var request = require('request'),
    FeedParser = require('feedparser'),
    xml2js = require('xml2js');

var Syndication = function() {}

Syndication.prototype.fetchFeed = function(url) {
    var feed,
        parser = new xml2js.Parser(),
        req = request(url),
        feedparser = new FeedParser([]);

    req.on('error', function(error) {
        // handle any request errors
    });
    req.on('response', function(res) {
        var stream = this;

        if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

        stream.pipe(feedparser);
    });

    feedparser.on('error', function(error) {
        // always handle errors
    });
    feedparser.on('readable', function() {
        // This is where the action is!
        var stream = this,
            meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
            ,
            item;
        
        while (item = stream.read()) {
            console.log(item.title);
            console.log(item.origlink);
            console.log('------------------------')
        }
    });
}

module.exports = Syndication;