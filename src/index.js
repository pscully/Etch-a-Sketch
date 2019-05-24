let config = {
  number: 16,
  colorChange: false,
  globalColor: '#000000',
  pageTitle: 'Etch-a-Sketch'
};

let app,
  buttonClear,
  buttonColor,
  buttonReset,
  buttonSection,
  container,
  gridCell,
  gridWrapper,
  section,
  title;

let colors = [
  '#7DB32B',
  '#A41809',
  '#421AAE',
  '#FEFEE3',
  '#F91A84',
  '#D01943',
  '#4E8669',
  '#FBB065',
  '#F53F42',
  '#23B4E4',
  '#8C5959',
  '#D9860F',
  '#FFAB01',
  '#1F64EB',
  '#71F35E',
  '#7EAD80'
];

app = document.querySelector('#app');

buttonClear = create('buttonClear', 'button');
buttonColor = create('buttonColor', 'button');
buttonReset = create('buttonReset', 'button');
buttonSection = create('buttonSection', 'section');
container = create('container', 'div');
gridWrapper = create('gridWrapper', 'div');
section = create('section', 'section');

buttonClear.innerText = 'CLEAR';
buttonColor.innerText = 'COLOR';
buttonReset.innerText = 'RESTART';

app.appendChild(container);
container.appendChild(section);
container.appendChild(buttonSection);
buttonSection.appendChild(buttonColor);
buttonSection.appendChild(buttonClear);
buttonSection.appendChild(buttonReset);
container.appendChild(gridWrapper);

gridWrapper.classList.add('wrapper', 'container');
buttonClear.classList.add('button');
buttonColor.classList.add('button');
buttonReset.classList.add('button');
buttonSection.classList.add('button-container');

buttonClear.addEventListener('click', function() {
  resetTable();
});

buttonColor.addEventListener('click', function() {
  flip(config.colorChange);
  pickColor();
});

buttonReset.addEventListener('click', function() {
  let number = prompt('How many squares do you want?', '16');
  createGrid(number);
});

gridWrapper.addEventListener('mouseover', function(e) {
  if (e.target.classList.contains('grid')) {
    e.target.style.backgroundColor = globalColor;
  }
});

function createHeader() {
  title = create('title', 'h1');
  title.classList.add('title');
  title.innerText = config.pageTitle;
  section.appendChild(title);
  return;
}

function createGrid(number) {
  const total = number * number;
  for (var i = 1; i <= total; i++) {
    gridCell = create('gridCell', 'div');
    gridCell.setAttribute('id', `cell-${i}`);
    gridWrapper.appendChild(gridCell).classList.add(`grid`);
  }
}

function resetTable() {
  let gridCells = document.getElementsByClassName('grid');
  while (gridCells[0]) {
    gridCells[0].parentNode.removeChild(gridCells[0]);
  }
}

function pickColor() {
  let i = getRandomInt(colors.length);
  let color = colors[i];
  buttonColor.style.backgroundColor = color;
  config.globalColor = color;
}

function flip(boolVariable) {
  if (boolVariable) {
    boolVariable = false;
  } else {
    boolVariable = true;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function create(variable, type) {
  return document.createElement(`${type}`);
}

createHeader();
createGrid(config.number);
