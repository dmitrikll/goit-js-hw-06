const userInput = document.querySelector("#validation-input");

userInput.addEventListener("blur", onBlur);

function onBlur(txt) {
  const inputNew = txt.currentTarget;
  const inputNewLength = Number(inputNew.dataset.length);
    
  if (inputNew.value.length === inputNewLength) {
    inputNew.classList.remove("invalid");
    inputNew.classList.add("valid");
  } else {
    inputNew.classList.remove("valid");
    inputNew.classList.add("invalid");
  }
}