var Syndication = require('./Syndication/syndication_client');

var SyndiInitial = new Syndication();

SyndiInitial.fetchFeed('http://feeds.reuters.com/reuters/INtopNews');

