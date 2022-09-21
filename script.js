const container = document.querySelector('#container');
const blackButton = document.createElement('button');
const rgbButton = document.createElement('button');
const eraserButton = document.createElement('button')
const gridSizeButton = document.createElement('button')
const buttonsContainer = document.querySelector('buttons')


function createDivs(rows,columns) {
  for (let i = 0; i < (rows * columns); i++) {
    const div = document.createElement('div')
    div.style.border = '2px solid black'
    container.style.gridRows = `repeat(${rows}, 1fr)`;
    container.style.gridColumns = `repeat(${columns}, 1fr)`;
    container.appendChild(div).classList.add('box')
  }
}

createDivs(16,16)

