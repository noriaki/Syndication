# Syndication
This is a simple module that enables the ***feedparser*** with ***Promise***. It depends on the following libraries:-

 1. [request](https://www.npmjs.com/package/request)
 2. [feedparser](https://www.npmjs.com/package/feedparser)


**Request**
A module for making HTTP request. Basically a HTTP client. This helps to fetch the RSS/ATOM/RDF URLS and helps in parsing the same.

**Feedparser**
This module adds methods for RSS, Atom, and RDF feed parsing in node.js using Isaac Schlueter's sax parser.


----------


**Current Features**

 1. Simple Parsing using URL's, the scenario is mentioned below<i class=" icon-ok"></i>
```
var Syndication = require("syndication");
var feeds = new Syndication();
var feedPromise = feeds.fetch('http://thing.live/rss');
feedPromise.then((feed) => {
  console.log(feed);
}).catch((error) => {
  console.log(error);
});
```
**Upcoming Features**

 1. Parsing multiple feeds - In Progress
 2. Timeout for Feeds - In Progress 
 3. Storage - In Progress
 4. REST Based Interface  
 5. Easy Management for Segregated URLS(URL Grouping) <i class="icon-ticket"></i>
