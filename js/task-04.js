let counterValue = 0;
const plusBtn = document.querySelector("button[data-action='increment']");
const minusBtn = document.querySelector("button[data-action='decrement']");
const newValue = document.querySelector("#value");

const countPlusBtn = function() {
  counterValue += 1;
  newValue.textContent = counterValue;
};

const countMinusBtn = function() {
  counterValue -= 1;
  newValue.textContent = counterValue;
};

plusBtn.addEventListener("click", countPlusBtn);
minusBtn.addEventListener("click", countMinusBtn);