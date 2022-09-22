const container = document.querySelector('#container');
const blackButton = document.createElement('button');
const rgbButton = document.createElement('button');
const eraserButton = document.createElement('button');
const gridSizeButton = document.createElement('button');
const resetButton = document.createElement('button');
const buttonsContainer = document.querySelector('buttons');


function createDivs(rows,columns) {
  for (let i = 0; i < (rows * columns); i++) {
    const div = document.createElement('div')
    div.style.border = '1px solid white'
    container.style.gridRows = `repeat(${rows}, 1fr)`;
    container.style.gridColumns = `repeat(${columns}, 1fr)`;
    div.addEventListener('mouseover', changeGridColor)
    container.appendChild(div).classList.add('box')
  }
}

function changeGridColor(e) {
  let color = `rgb(${[0, 0, 0].map(channel => {
    return Math.floor(Math.random() * 256);
  }).join(',')})`
  Object.assign(e.target.style, {
    backgroundColor : color,
    opacity : 0.25
  });
}

createDivs(16,16)

