let color = 'black';

document.addEventListener('DOMContentLoaded',function(){

  console.log('creating simulated universe within simulated universe...');

  createGrid(16);

  let selectGridSizeButton = document.querySelector('.grid-size-button');
  selectGridSizeButton.addEventListener('click', function() {
    let size = getGridSize();
    createGrid(size);
  })
  
})



function createGrid(size) {
  let container = document.querySelector('.container');
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  let gridSize = size * size;
  for(let i = 0; i < gridSize; i++){
    let div = document.createElement('div');
    div.classList.add('gridcell')
    div.addEventListener('mouseover', drawGrid);
    
    container.insertAdjacentElement('beforeend', div)
  }
}

createGrid();


function getGridSize() {
  let input = prompt('Choose a grid size between 16-100!')
  let message = document.querySelector('#message')
  if(input == "") {
    message.innerHTML = "Please select a grid size";
  }
  else if (input < 16 || input > 100) {
    message.innerHTML = 'Incorrect value, please choose a grid size between 16-100!';
  }
  else {
    message.innerHTML = 'Time to Sketch!'
  }
  return input;

}


function drawGrid() {
  if (color == 'black') {
    this.style.backgroundColor = 'black'
  }
  else { 
    this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`
  }

}

function getColorChoice(colorChoice) {
  color = colorChoice;
}













