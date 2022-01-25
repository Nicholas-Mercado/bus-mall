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
let report = document.getElementById('showresultsbtn');

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


// render image function x
// control logic make sure all images are unique x
// use array method to see if number already exists x
// push numbers into array x
// use array to store 3 random numbers x

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
  // console.log(runingImage);

  let x = runingImage.pop();
  let y = runingImage.pop();
  let z = runingImage.pop();
  // console.log(x);
  // console.log(y);
  // console.log(z);

  //render images
  // append the dom images
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



function handleClick(event){

  // incremets down each round
  totalRounds--;
  // incremetns to key name clicks
  // Dont understand event.target.alt
  let imgClick = event.target.alt;
  for(let i = 0; i < allItems.length; i++){
    if(imgClick === allItems[i].name) {
      console.log(imgClick);
      // increments votes for each object
      allItems[i].clicks++;
    }
  }
  // rerender images
  renderImage();

  // end attempts - knew I needed but had to reference
  if(totalRounds === 0){
    container.removeEventListener('click', handleClick);
  }
}



// append the dom report

function handleResults(event){
  let resultsList = document.getElementById('display-results');
  if(totalRounds === 0){
    // loop through each object and create list
    // Creates multi li elements
    for(let i = 0; i < allItems.length; i++){
      let li = document.createElement('li');
      console.log(li);
      //banana had 3 votes, and was seen 5 times.
      li.textContent = `${allItems[i].name} had ${allItems[i].clicks} votes, and was seen ${allItems[i].views} times`;
      resultsList.appendChild(li);
      console.log(li);
    }
  }
}




// event listener click
container.addEventListener('click', handleClick);

// event listener submit
report.addEventListener('click', handleResults);


