const userInput = document.querySelector("#font-size-control");
const userText = document.querySelector("#text");

userInput.addEventListener("input", userFontSize);

function userFontSize(txt) {
  userText.style.fontSize = `${txt.target.value}px`;
}