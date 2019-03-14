const colors = require('colors');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

let votes = [0,0,0,0,0,0]
let comments = [[],[],[],[],[],[],[]]
const port = 1337;

console.log('running index.js'.blue);

app.get('/', function(req, res) {
	res.send('In the Comment App');
});


app.post('/comment/:productID', function(req, res) {
	let productID = req.params.productID;
	console.log(req.body.text)
	comments[productID].push( {
		text: req.body.text,
		timestamp: req.body.timestamp
	})
	res.send(comments[productID])
});


///////////VOTE PART////////////////
app.get('/vote/:artistID', function(req, res) {
	res.send(votes)
});

app.post('/vote/:artistID', function(req, res) {

	let artistNumber = parseInt(req.params.artistID);
		
	console.log('artist id is ' + artistNumber)
	votes[artistNumber]++;
	console.log(votes)
	console.log('found '+artistNumber+'th button')

	res.send(votes)
});


app.listen(port, function() {
	console.log('Example app listening on port 1337!'.red)
});

