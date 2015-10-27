var express = require('express');
var app = express();
var mongojs = require('mongojs');
var fs = require("fs");

var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());

app.get('/contactlist', function(req, res){
	//console.log(req);
	fs.readFile(db.contactlist, function(err, data){
		console.log(data);
		res.end(data);
	})
});





app.listen(8000);
console.log("server running on 8000");