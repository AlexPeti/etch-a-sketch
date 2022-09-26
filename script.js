/*function generateGrid(size) {
let container = document.querySelector('#container');
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < 256; i++) {
  let gridBox = document.createElement('div');
  gridBox.classList.add('gridbox');
  //gridBox.addEventListener('mouseover',gridBoxColor);
  gridBox.addEventListener('mouseover', drawFunction);
  gridBox.style.backgroundColor = 'white';
  container.insertAdjacentElement("beforeend",gridBox);
}
}
  
generateGrid(16)

document.getElementById('standard').onclick = drawFunction()

function drawFunction() {
  this.style.backgroundColor = 'black';
}

function gridBoxColor() {
  
  this.style.backgroundColor = 'black';
}
*/  ///////////////////// FIRST TRY ///////////////////////////

document.addEventListener('DOMContentLoaded',function(){
  console.log('creating simulated universe within simulated universe...');
  createGrid(32);
})


function createGrid(size) {
  let container = document.querySelector('.container');
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  let gridSize = size * size;
  for(let i = 0; i < gridSize; i++){
    let div = document.createElement('div');
    div.style.backgroundColor = 'white'
    container.insertAdjacentElement('beforeend', div)
  }
}

createGrid();


















