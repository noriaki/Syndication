var FeedParserPromise = require('../lib/index.js');

var feeds = new FeedParserPromise();
var fetchedFeeds=feeds.fetch('http://thing.live/rss');

fetchedFeeds.then((val)=>{
    console.log(val);
}).catch((error)=>{
    console.log(error)
});
