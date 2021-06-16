const input1 = document.getElementById('input1');
input1.value = '#000000';
const input2 = document.getElementById('input2');
input2.value = '#FF0000';
const input3 = document.getElementById('input3');
input3.value = '#FF9300';
const input4 = document.getElementById('input4');
input4.value = '#FFF000';
const input5 = document.getElementById('input5');
input5.value = '#B9FF00';
const input6 = document.getElementById('input6');
input6.value = '#59FF00';
const input7 = document.getElementById('input7');
input7.value = '#00FF55';
const input8 = document.getElementById('input8');
input8.value = '#00FFDC';
const input9 = document.getElementById('input9');
input9.value = '#0055FF';
const input10 = document.getElementById('input10');
input10.value = '#ffffff';
const inputsArray = [
  input1,
  input2,
  input3,
  input4,
  input5,
  input6,
  input7,
  input8,
  input9,
  input10,
];

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
const button10 = document.getElementById('button10');
const buttonsArray = [
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  button10,
];

// Set colors to buttons
function insertColorToButton() {
  for (let index in inputsArray) {
    buttonsArray[index].style.backgroundColor = inputsArray[index].value;
  }
}

// Add event to appear input colors container
const selectColors = document.getElementById('select-color');
selectColors.addEventListener('click', () => {
  const collectionColors = document.querySelector('.input-color-collection');
  if (collectionColors.style.display === 'flex') {
    collectionColors.style.display = 'none';
  } else {
    collectionColors.style.display = 'flex';
  }
});

// Add event to close appeared container
const exitButton = document.getElementById('erase-button');
exitButton.addEventListener('click', () => {
  const collectionColors = document.querySelector('.input-color-collection');
  if (collectionColors.style.display === 'flex') {
    collectionColors.style.display = 'none';
  }
});

// Add event to hide/show header container
const buttonHeader = document.getElementById('button-header');
buttonHeader.addEventListener('click', () => {
  const header = document.getElementById('header')
  if (header.style.display === 'none') {
    header.style.display = 'flex';
  } else {
    header.style.display = 'none';
  }
});

// Change class select in buttons
const divButtons = document.getElementById('buttons');
divButtons.addEventListener('click', (event) => {
const assistant = event;
const classToRemove = document.getElementsByClassName('selected')[0];
if (assistant.target !== divButtons) {
  classToRemove.classList.remove('selected');
  assistant.target.classList.add('selected');
}
});


// Change pixel and board size
const boardSize = document.getElementById('board-size');
const pixelSize = document.getElementById('pixel-size');
boardSize.value = 30;
pixelSize.value = 10;

function adjustBoard() {
  let pixel = pixelSize.value + 'px';
  let board = boardSize.value * pixelSize.value + boardSize.value * 2 + 'px';
  let numberOfPixels = boardSize.value * boardSize.value;
  pixelBoard.innerHTML = '';
  pixelBoard.style.width = board;
  pixelBoard.style.height = board;
  for (let index = 0; index < numberOfPixels; index += 1) {
    let newPixel = document.createElement('div');
    newPixel.classList.add('pixel');
    newPixel.style.width = pixel;
    newPixel.style.height = pixel;
    document.getElementById('pixel-board').appendChild(newPixel);
  }
}

// Clear colors in board
function clearBoard() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}

// Color pixel with selected color
// let clicked = false;
const pixelBoard = document.getElementById('pixel-board');

pixelBoard.addEventListener('click', (event) => {
  event.preventDefault();
  const selectedColor = document.querySelector('.selected');
  if (event.target !== pixelBoard) {
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
    // clicked = true;
    // console.log(event.target.style.backgroundColor);
  }
});

// Set mouse over color pixel
// pixelBoard.addEventListener('mouseover', (event) => {
//   event.preventDefault();
//   if (event.target !== pixelBoard) {
//     event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
//   }
// });

// Set mouse leave color pixel
// pixelBoard.addEventListener('mouseout', (event) => {
//   event.preventDefault();
//   if (event.target !== pixelBoard) {
//     if (clicked === true) {
//       clicked = false;
//     } else {
//       event.target.style.backgroundColor = '';
//     }
//     // console.log('Não coloriu');
//   }
// });

window.onload = () => {
  insertColorToButton();
  for (let input of inputsArray) {
    input.addEventListener('input', insertColorToButton);
  }
  
  adjustBoard();
  pixelSize.addEventListener('input', adjustBoard);
  boardSize.addEventListener('input', adjustBoard);
  
  clearBoard();
}
