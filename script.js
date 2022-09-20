const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});


const container = document.querySelector('#container');
let totalRows = 16;
let totalBoxes = totalRows * totalRows;


let row = 1;
let column = 1;
let box = document.createElement('div');
box.style.border = '2px solid black';
box.style.boxRow = row;
box.style.boxColumn = column;


