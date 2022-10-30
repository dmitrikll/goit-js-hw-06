const plusBtn = document.querySelector("button[data-action='increment']");
const minusBtn = document.querySelector("button[data-action='decrement']");
const newValue = document.querySelector("#value");
let counterValue = 0;

// ver. 1 - стандартна функція
const countPlusBtn = function() {
  counterValue += 1;
  newValue.textContent = counterValue;
};

const countMinusBtn = function() {
  counterValue -= 1;
  newValue.textContent = counterValue;
};

// ver.2 - стрілочна функція
// const countPlusBtn = () => {
//   counterValue += 1;
//   newValue.textContent = counterValue;
// };

// const countMinusBtn = () => {
//   counterValue -= 1;
//   newValue.textContent = counterValue;
// };

plusBtn.addEventListener("click", countPlusBtn);
minusBtn.addEventListener("click", countMinusBtn);