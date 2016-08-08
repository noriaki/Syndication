var FeedParserPromise = require('../lib/index.js');

var feeds = new FeedParserPromise(500);
var fetchedFeedsPromise=feeds.fetchAll([
    'http://feeds.reuters.com/reuters/INtopNews',
    'http://feeds.reuters.com/reuters/INbusinessNews',
    'http://feeds.reuters.com/reuters/INsouthAsiaNews',
    'http://feeds.reuters.com/reuters/INworldNews'
    ]);
Promise.all(fetchedFeedsPromise).then((item)=>{
    console.log(item.length);
}).catch((error)=>{
    console.log(error);
});
