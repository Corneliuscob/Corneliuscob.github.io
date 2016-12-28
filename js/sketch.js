// //loading p5 js

function setup() {
	createCanvas(100,100);
	loadJSON('http://molson.ubcchemecar.com/api',showTime);
	console.log("loaded the stuff");
	// var button = select('#timestamp');
	// button.mousePressed(drawTime);

}
function showTime(req) {
	console.log("yay");
	var molsonData = req;
	console.log(molsonData);
	console.log("yay");
	// var parsedData = JSON.stringify(data,null,2);
	// console.log(parsedData);
	console.log(typeof(molsonData));
	console.log(molsonData.timestamp);
	console.log(typeof(molsonData.timestamp));
	document.getElementById("whatTime").innerHTML = molsonData.timestamp;
}
// function drawTime(){
// 	textSize(16);
// 	fill(255);
// 	text(showTime,10,10);
// 	console.log("done");
// }

// function myFunction() {
//     document.getElementById("whatTime").innerHTML = showTime();
// }

