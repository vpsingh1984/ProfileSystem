var mongojs = require('mongojs');
var db = mongojs('contactlist', ['carlist','contactlist']);

module.exports = db;