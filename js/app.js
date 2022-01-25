'use strict';


// Add a control rounds variables x
// - items array x

//  ***************** Global VARIABLES ***************


let totalRounds = 25;

const allItems = [];

// let counter = 0; Missed this

// ******************* GRAB THE DOM **********************

// grab Dom for event listener
//   - container x
//   - button report

let container = document.getElementById('container');
let report = document.getElementById("show-results-btn");

// grab dom for to populate images
//   - Images x 3

let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');


// *************** Constructor!!!!!!!!!!***************


// Constructor
// Name of the product x
// File path of image x "couldn't find"
// Times the image has been shown --views x
// times a item has been clicked-- clicks x
// remember to push x "missed"

function Item(name,fileExtension = 'jpg') {
  this.name = name;
  this.src = `assets/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  allItems.push(this);

}

// ********* Instantiate Items***********
// Only needed if hard code
// Start to think about how you can automate this
// missed

new Item('bag');
new Item('banana');
new Item('bathroom');
new Item('boots');
new Item('breakfast');
new Item('bubblegum');
new Item('chair');
new Item('cthulhu');
new Item('dog-duck');
new Item('dragon');
new Item('pen');
new Item('pet-sweep');
new Item('scissors');
new Item('shark');
new Item('sweep', 'png');
new Item('tauntaun');
new Item('unicorn');
new Item('water-can');
new Item('wine-glass');

console.log(allItems);

// ********************** FUNCTIONS******************

// Functions
// Random number generator x


// render image function 
// control logic make sure all images are unique
// use array method to see if number already exists
// push numbers into array
// if not exist push -control rounds 25
// use array to store 3 random numbers

function getRandomItem(){
  // Dont understand why * allItems
  // Does it only create numbers in the index size?
  return Math.floor(Math.random() * allItems.length);
}

function renderImage(){
  // use array to store 3 random numbers 
  //missed
  let runingImage = [];
  
  // control logic make sure all images are unique
  while(runingImage.length < 3){
    let randomNumber = getRandomItem();
    // use array method to see if number already exis// push numbers into array
    while(!runingImage.includes(randomNumber)){
      runingImage.push(randomNumber);
    }
  }
  // shows three random number in running image array
  console.log(runingImage);
  
  let x = runingImage.pop();
  let y = runingImage.pop();
  let z = runingImage.pop();
  console.log(x);
  console.log(y);
  console.log(z);
  
  imgOne.src = allItems[x].src;
  imgOne.alt = allItems[x].name;
  allItems[x].views++;

  imgTwo.src = allItems[y].src;
  imgTwo.alt = allItems[y].name;
  allItems[y].views++;

  imgThree.src = allItems[z].src;
  imgThree.alt = allItems[z].name;
  allItems[z].views++;
}
renderImage();


// ******************** Events!*******************

  // Event images

  // append the dom report

  
