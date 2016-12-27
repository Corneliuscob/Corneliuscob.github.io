var express = require('express')
  , cors = require('cors')
  , app = express();
 
app.use(cors());
console.log("hi");


function setup() {
	createCanvas(400,400);
	// loadJSON('all', gotData);
	loadJSON('http://molson.ubcchemecar.com/api',show);
	// console.log("wordbase located");
		// p5 allows us to select buttons kinda like a jquery
	// var button = select('#submit');
	// button.mousePressed(submitWord);

	

}

function show(req,res) {
	data = req;
	res.send(data);
	console.log("ji");
	console.log(data+"hi");
}