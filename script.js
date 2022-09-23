function generateGrid(size) {
let container = document.querySelector('#container');
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < 256; i++) {
  let gridBox = document.createElement('div');
  gridBox.classList.add('gridbox');
  gridBox.addEventListener('mouseover',gridBoxColor);
  gridBox.style.backgroundColor = 'white';
  container.insertAdjacentElement("beforeend",gridBox);
}

}
  
generateGrid(16)

function gridBoxColor() {
  this.style.backgroundColor = 'black';
}



















