var request = require('request'),
    FeedParser = require('feedparser');

var FeedParserPromise = function() {

};

FeedParserPromise.prototype.fetch = function(options) {
    return new Promise(function(resolve, reject) {
        const feedparser = new FeedParser();
        var items=[];

        feedparser.on('error', (error) => {
            reject(error);
        });
        feedparser.on('readable', () => {
            var item;
            while (item = feedparser.read()) {
                items.push(item);
            }
            return items;
        });

        request.get(options)
            .on('error', (error) => {
                reject(error);
            })
            .pipe(feedparser)
            .on('end', () => {
                return resolve(items);
            });
    });
}

module.exports = FeedParserPromise;
