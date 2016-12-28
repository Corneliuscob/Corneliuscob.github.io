// A2Z F16
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F16

// Get input from user
var points = [];

// Keep list of DOM elements for clearing later when reloading
var listItems = [];

var database;

function setup() {

  // Start Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB-4uJRlLFOvSV9GTBZNvkSVy6zOQ5pnnE",
    authDomain: "database1-b477b.firebaseapp.com",
    databaseURL: "https://database1-b477b.firebaseio.com",
    storageBucket: "database1-b477b.appspot.com",
    messagingSenderId: "607638722143"
  };
  firebase.initializeApp(config);
  database = firebase.database();

  loadAll();

  var params = getURLParams();
  if (params.id) {
    loadOne(params.id);
  }

  var canvas = createCanvas(300, 300);
  canvas.parent('canvas');
  background(51);
  
}




function draw() {

}

function loadAll() {
  var ref = database.ref("data");
  ref.on("value", gotAll, errData);
  // The data comes back as an object

  function gotAll(data) {

    var drawings = data.val();
    
    console.log(drawings);
    // Grab all the keys to iterate over the object
    var keys = Object.keys(drawings);
    // Loop through array
    // console.log(keys);
    for (var i = 0; i < keys.length; i++){
    	var k =keys[i];
    	var temperature = drawings[k].temperature;
    	var proton = drawings[k].pH;
    	var timestamp=drawings[k].timestamp;
    	var _id = drawings[k]._id;
    	// console.log("temp: " + temperature + " pH: "+proton);
    	var li = createElement('li', "temp: " +temperature + " pH: "+proton+ " timestamp: "+ timestamp+ " id: "+_id );
    	li.parent('dataset');
    }
   
  }

  function errData(error) {
    console.log("Something went wrong.");
    console.log(error);
  }
}


function loadOne(id) {
  var ref = database.ref("data/" + id);
  ref.on("value", gotOne, errData);

  function errData(error) {
    console.log("Something went wrong.");
    console.log(error);
  }

  function gotOne(data) {
    points = data.val().path;
  }
}


