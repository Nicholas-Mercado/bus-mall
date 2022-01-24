'use strict';


// Add a control rounds variables x
// - items array x

//  ***************** Global VARIABLES ***************


let totalRounds = 25;

const allitems = [];

// let counter = 0; Missed this

// ******************* GRAB THE DOM **********************

// grab Dom for event listener
//   - container x
//   - button report

let container = document.getElementById('container');
let report = document.getElementById("show-results-btn");

// grab dom for to populate images
//   - Images x 3

let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');


// *************** Constructor!!!!!!!!!!***************


// Constructor
// Name of the product x
// File path of image x "couldn't find"
// Times the image has been shown --views x
// times a item has been clicked-- clicks x
// remember to push x "missed"

function Item(name,fileExtension = 'jpeg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  allitems.push(this);

}

// ********* Instantiate Items***********
// Only needed if 
// missed

