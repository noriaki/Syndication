# Syndication

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg?maxAge=2592000?style=plastic)](https://github.com/shivkumarganesh/Syndication)

![Made By Information Visualization Geeks](https://raw.githubusercontent.com/shivkumarganesh/Syndication/master/syndication.png)  
  
This is a simple module that enables the ***feedparser*** with ***Promise***. It depends on the following libraries:-

 1. [request](https://www.npmjs.com/package/request)
 2. [feedparser](https://www.npmjs.com/package/feedparser)

-----------

#Installation

For the installation you can get along with the following
```js
npm install syndication --save
```

The dependencies the above module have is explained below:-

**Request**
A module for making HTTP request. Basically a HTTP client. This helps to fetch the RSS/ATOM/RDF URLS and helps in parsing the same.

**Feedparser**
This module adds methods for RSS, Atom, and RDF feed parsing in node.js using Isaac Schlueter's sax parser.

#Current Features

 1. Simple Parsing using URL's, the scenario is mentioned below
    ```js
    var Syndication = require("syndication");
    var feeds = new Syndication();
    var feedPromise = feeds.fetch('http://thing.live/rss');
    feedPromise.then((feed) => {
      console.log(feed);
    }).catch((error) => {
      console.log(error);
    });
    ```

 2. Using Promise.all() to resolve multiple Promises for fetching feeds.
    ```js
    var Syndication = require("syndication");
    var feeds = new Syndication();
    var fetchedFeeds = feeds.fetch('http://thing.live/rss');
    var fetchedFeeds1 = feeds.fetch('http://rss.cnn.com/rss/edition.rss');
    
    /*Using Promise.all() to Resolve*/
    Promise.all([
        fetchedFeeds,
        fetchedFeeds1
    ]).then((val) => {
        console.log(val);
    }).catch((error) => {
        console.log(error)
    });
    ```


#Upcoming Features

- [ ] Parsing multiple feeds - In Progress
- [ ] Timeout for Feeds - In Progress 
- [ ] Storage
- [ ] REST Based Interface 
- [ ] Easy Management for Segregated URLS(URL Grouping)
- [ ] Documentation
- [ ] Testing


[npm-image]: https://img.shields.io/npm/v/syndication.svg
[npm-url]: https://npmjs.org/package/syndication
[downloads-image]: https://img.shields.io/npm/dm/syndication.svg
[downloads-url]: https://npmjs.org/package/syndication
