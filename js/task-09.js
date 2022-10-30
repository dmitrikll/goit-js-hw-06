const bodyElement = document.querySelector("body");
const changeColorElement = document.querySelector(".change-color");
const colorElement = document.querySelector(".color");

changeColorElement.addEventListener("click", changeBgColorRandom);

function changeBgColorRandom() {
  const randomColor = getRandomHexColor();
  
  bodyElement.style.backgroundColor = randomColor;
  colorElement.textContent = randomColor;
  
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};