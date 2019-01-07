const express = require('express');
const router = express.Router();

const mongodb = require('mongodb');
const client = mongodb.MongoClient;

const uri = "mongodb://mongo/petpal";

router.get('/', function(req, res, next) {
	client.connect(uri, function (err, db) {
	    if (err) throw err;
		const dbo = db.db();

        res.send('Connected to MongoDB')
	});
});

router.post('/add', function(req, res, next) {
	client.connect(uri, function (err, db) {
	    if (err) throw err;
		const dbo = db.db();

		try {
			dbo.collection('questions', (err, collection) => {
				collection.insert(req.body);

				dbo.collection('questions').count((err,count) => {
					if (err) throw err;
					res.json(
						{ "total_rows":  count }
					)
				})
				db.close();
			})
		}
		catch(error){
			console.error(error)
		}

	});
});

router.get('/get', (req, res, next) => {
	client.connect(uri, (err, db) => {
		if (err) throw err
		const dbo = db.db()

		try {
			dbo.collection('questions').find({}).toArray((err, result) =>{
				if (err) throw err
				res.json(result)
				db.close()
			})
		}
		catch(error){
			console.error(error)
		}
	})
})

router.get('/get/user_id/:id', (req, res, next) => {
	client.connect(uri, (err, db) => {
		if (err) throw err
		const dbo = db.db()
		const id = { user_id :req.params.id }
		try {
			dbo.collection('questions').find(id).toArray((err, result) =>{
				if (err) throw err
				res.json(result)
				db.close()
			})
		}
		catch(error){
			console.error(error)
		}
	})
})


module.exports = router;
