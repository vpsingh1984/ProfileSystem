var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = require("../db_conf/connector");

router.get('/', function(req, res){
	console.log('get request for car');

	db.carlist.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

router.post('/', function(req, res){
	console.log(req.body);
	db.carlist.insert(req.body, function(err, doc){
		res.json(doc);
	})
});

router.delete('/:id', function(req, res){
	console.log("Req: "+req+"  Respose: "+res);
	var id = req.params.id;
	console.log(id);
	db.carlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

router.get('/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.carlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

router.put('/:id', function(req, res){
	var id = req.params.id;
	console.log(req.body.brand);
	db.carlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {brand: req.body.brand, modal: req.body.modal, price: req.body.price}},
		new: true}, function(err, doc){
			res.json(doc);
		});
});

module.exports = router;
