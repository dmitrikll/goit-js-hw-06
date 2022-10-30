const userInput = document.querySelector("#font-size-control");
const userText = document.querySelector("#text");

// ver.1 - addEvenListener
userInput.addEventListener("input", userFontSize);

function userFontSize(txt) {
  userText.style.fontSize = `${txt.target.value}px`;
};

// ver. 2 - oninput
// userInput.oninput = function () {
//   userText.style.fontSize = userInput.value + 'px'
// };