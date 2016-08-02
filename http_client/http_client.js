var request = require('request'),
    xml2js = require('xml2js');

var HTTP = function() {}

HTTP.prototype.fetchFeed = function() {
    var feed;
    var parser = new xml2js.Parser();
    request('http://rss.cnn.com/rss/edition.rss',
        (error, response, body) => {
            if (!error && response.statusCode == 200) {
                if (response.headers['content-type'].split(';')[0] === 'text/xml') {
                    parser.parseString(body, function(err, result) {
                        console.dir(JSON.stringify(result));
                        console.log('Done');
                    });
                }
            }
        })
}
var a = new HTTP();
a.fetchFeed();
//module.exports = HTTP;