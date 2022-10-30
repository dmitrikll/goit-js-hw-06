
const divControls = document.querySelector('#controls');
const inputField = divControls.querySelector('input');
const divBoxes = document.querySelector('#boxes');
const createBtn = divControls.querySelector('[data-create]');
const destroyBtn = divControls.querySelector('[data-destroy]');
let boxesCollection = [];
let sizesOfBox = 30;

// кубіки горизонтально <--->
// divBoxes.style.display = `flex`;
// divBoxes.style.flexWrap = `wrap`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function createBoxes(amount) {
  console.log(amount);
    for (let i = 0; i < amount; i += 1) {
      let createEl = document.createElement('div');
      createEl.style.width = `${sizesOfBox}px`;
      createEl.style.height = `${sizesOfBox}px`;
      sizesOfBox += 10;
      createEl.style.backgroundColor = getRandomHexColor();
      boxesCollection.push(createEl);
  };
};

function pushBoxesCollection() {
  createBoxes(Number(inputField.value));
  divBoxes.append(...boxesCollection);
};

createBtn.addEventListener('click', () => {
  pushBoxesCollection();
  inputField.value = 0;
});

destroyBtn.addEventListener('click', () => {
  window.location.reload();
});