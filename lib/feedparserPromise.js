/**
 * Require Statements to get the two dependencies
 * 1. Require Module
 * 2. FeedParser Module
 */

var request = require('request'),
    FeedParser = require('feedparser');

/**
 * Represents a FeedParserPromise
 * @constructor
 */
var FeedParserPromise = function() {

};

/**
 * This is an instance member of FeedParserPromise class, FeedParserPromise#fetch.
 * @memberof FeedParserPromise.prototype
 * @param {string} URL for which the feed is required. 
 */ 
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
