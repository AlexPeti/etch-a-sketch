let color = 'black';

  createGrid(16);
  resetGrid();

  let selectGridSizeButton = document.querySelector('.grid-size-button');
  selectGridSizeButton.addEventListener('click', function() {
    let size = getGridSize();
    createGrid(size);
  })

////////////////function that greates a grid (vanilla grid size is 16) ///////////////////////

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

////////////function that prompts the user for a number between 16-100 to get a grid size////

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

//////////////// function that lets you draw on the grid////////////////////

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

/////////////function that resets the grid/////////////////////////
function resetGrid() {
  let gridCells = document.querySelectorAll('div')
  gridCells.forEach((div) => div.style.backgroundColor = 'white')
}











