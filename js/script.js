function hideColorCollection() {
  const collectionColors = document.querySelector('.input-color-collection');
  collectionColors.style.display = 'flex';
}

hideColorCollection();

function createInputColors(number) {
  for (let index = 0; index < number; index += 1) {
    const divColors = document.querySelector('.input-color-collection');
    const divButton = document.querySelector('.erase-button');
    const newInputColor = document.createElement('input');
    newInputColor.type = 'color';
    newInputColor.id = `color${(index+1)}`;
    newInputColor.classList.add('color');
    divColors.insertBefore(newInputColor, divButton);
  }
}

function createXButton() {
  const divColors = document.querySelector('.input-color-collection');
  const eraseButton = document.createElement('button');
  eraseButton.innerHTML = 'X';
  eraseButton.id = 'erase-button';
  eraseButton.classList.add('erase-button');
  divColors.appendChild(eraseButton);
}

createXButton();

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

colorNumberInput.addEventListener('input', () => {
  const removeColorInputs = document.querySelectorAll('.color');
  const removeColorButtons = document.querySelectorAll('.button');
  if (colorNumberInput.value === '') {
    alert('Valor inválido.');
  } else {
    for (let index = 0; index < removeColorInputs.length; index += 1) {
      removeColorInputs[index].remove();
      removeColorButtons[index].remove();
    }
  }
  verifyColorNumber();
  insertColor();
  insertColorToButton();
});

function generateRandomNumberRgb() {
  randomColor = Math.floor(Math.random()*16777215).toString(16);
  return `#${randomColor}`;
}

function insertColor() {
  const colorsInputs = document.querySelectorAll('.color');
  for (let index = 0; index < colorsInputs.length; index += 1) {
    if (index === 0) {
      colorsInputs[0].value = '#000000';
    } else {
      colorsInputs[0].value = '#000000';
      colorsInputs[index].value = generateRandomNumberRgb(); 
      colorsInputs[colorsInputs.length-1].value = '#FFFFFF';
    }
  }
}

function insertColorToButton() {
  const colorInputs = document.querySelectorAll('.color');
  const colorButtons = document.querySelectorAll('.button');
  for (let index = 0; index < colorInputs.length; index += 1) {
    colorButtons[index].style.backgroundColor = colorInputs[index].value;
  }
}

