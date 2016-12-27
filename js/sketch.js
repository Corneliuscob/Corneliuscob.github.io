// //loading p5 js

function setup() {
	
	loadJSON('http://molson.ubcchemecar.com/api',show);
	console.log("loaded the stuff");

}
function show(req,res) {
	console.log("yay");
	molsonData = req;
	console.log(molsonData);
	console.log("yay");
	// var parsedData = JSON.stringify(data,null,2);
	// console.log(parsedData);
	console.log(typeof(molsonData));
	console.log(molsonData.timestamp);

}