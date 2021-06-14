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

function insertColorToButton() {
  for (let index in inputsArray) {
    buttonsArray[index].style.backgroundColor = inputsArray[index].value;
  }
}

insertColorToButton();

function createExitButton() {
  const divColors = document.querySelector('.input-color-collection');
  const eraseButton = document.createElement('button');
  eraseButton.innerHTML = 'X';
  eraseButton.id = 'erase-button';
  eraseButton.classList.add('erase-button');
  divColors.appendChild(eraseButton);
}

createExitButton();

const colorNumberInput = document.getElementById('color-number');
const selectColors = document.getElementById('select-color');

selectColors.addEventListener('click', () => {
  const collectionColors = document.querySelector('.input-color-collection');
  if (collectionColors.style.display === 'flex') {
    collectionColors.style.display = 'none';
  } else {
    collectionColors.style.display = 'flex';
  }
});

const exitButton = document.getElementById('erase-button');

exitButton.addEventListener('click', () => {
  const collectionColors = document.querySelector('.input-color-collection');
  if (collectionColors.style.display === 'flex') {
    collectionColors.style.display = 'none';
  }
});

function createColorButtons(number) {
  for (let index = 0; index < number; index += 1) {
    const divColorButtons = document.getElementById('buttons');
    const newButtonColor = document.createElement('button');
    newButtonColor.id = `button${index+1}`
    newButtonColor.classList.add('button');
    newButtonColor.style.width = '20px';
    newButtonColor.style.height = '20px';
    divColorButtons.appendChild(newButtonColor);
  }
}

function verifyColorNumber() {
  if (colorNumberInput < 1) {
    createInputColors(1);
    createColorButtons(1);
  }
  else if (colorNumberInput.value > 10) {
    createInputColors(10);
    createColorButtons(10);
  } else {
    createInputColors(colorNumberInput.value);
    createColorButtons(colorNumberInput.value);
  }
}

function generateRandomNumberRgb() {
  randomColor = Math.floor(Math.random()*16777215).toString(16);
  return `#${randomColor}`;
}

const divButtons = document.getElementById('buttons');
divButtons.addEventListener('click', (event) => {
  const assistant = event;
  const classToRemove = document.getElementsByClassName('selected')[0];
  if (assistant.target !== divButtons) {
    classToRemove.classList.remove('selected');
    assistant.target.classList.add('selected');
  }
});

const buttonHeader = document.getElementById('button-header');

buttonHeader.addEventListener('click', () => {
  const header = document.getElementById('header')
  if (header.style.display === 'none') {
    header.style.display = 'flex';
  } else {
    header.style.display = 'none';
  }
});