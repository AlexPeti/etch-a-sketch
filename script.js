const container = document.querySelector('#container');

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

