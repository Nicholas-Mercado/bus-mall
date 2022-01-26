'use strict';

let totalRounds = 25;
let allItems = [];
let runningImage = [];



let container = document.getElementById('container');
let report = document.getElementById('showresultsbtn');
let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');


const ctx = document.getElementById('myChart').getContext('2d');

// *************** Constructor!!!!!!!!!!***************


function Item(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `assets/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  allItems.push(this);
  
}

let retrieveItems = localStorage.getItem('items');
let parsedItems = JSON.parse(retrieveItems);
// console.log(parsedItems);

if(retrieveItems){
  allItems = parsedItems;
}else{

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
}
console.log(allItems);

// ********************** FUNCTIONS******************


function getRandomItem() {
  return Math.floor(Math.random() * allItems.length);
}


function renderImage() {
  while (runningImage.length < 6) {
    let randomNumber = getRandomItem();
    while (!runningImage.includes(randomNumber)) {
      runningImage.push(randomNumber);
    }
  }

  let x = runningImage.shift();
  let y = runningImage.shift();
  let z = runningImage.shift();

  imgOne.src = allItems[x].src;
  imgOne.alt = allItems[x].name;
  
  imgTwo.src = allItems[y].src;
  imgTwo.alt = allItems[y].name;
  
  imgThree.src = allItems[z].src;
  imgThree.alt = allItems[z].name;
  while(totalRounds){
    allItems[x].views++;
    allItems[z].views++;
    allItems[y].views++;
    break;
  }
}
renderImage();


// ******************** Events!*******************



function handleClick(event) {

  totalRounds--;
  let imgClick = event.target.alt;
  for (let i = 0; i < allItems.length; i++) {
    if (imgClick === allItems[i].name) {
      // console.log(imgClick);
      allItems[i].clicks++;
    }
  }
  renderImage();
  if (totalRounds === 0) {
    container.removeEventListener('click', handleClick);
  }
}




function handleResults(event) {
  if (totalRounds === 0) {
    renderChart();
  }
  // *****LOCAL STORAGE********
  // Step one Stringify
  let stringAllItems = JSON.stringify(allItems);

  // step two Set the Item in Storage
  localStorage.setItem('items',stringAllItems);
  // console.log(stringAllItems);
}


container.addEventListener('click', handleClick);
report.addEventListener('click', handleResults);


// ********************Chart***********************
function renderChart() {

  const e = document.querySelector('#container');
  e.remove();
  const b = document.querySelector('#showresultsbtn');
  b.remove();

  let itemNames = [];
  let itemClicks = [];
  let itemViews = [];

  for (let i = 0; i < allItems.length; i++) {
    itemClicks.push(allItems[i].clicks);
    itemNames.push(allItems[i].name);
    itemViews.push(allItems[i].views);
  }

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: itemNames,
      datasets: [{
        label: '# of Votes',
        data: itemClicks,
        backgroundColor:
          '#7F9172',
        borderColor: '#7F9172',
        borderWidth: 1
      },
      {
        label: '# of views',
        data: itemViews,
        backgroundColor:
          '#567568',
        borderColor: '#567568',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}
