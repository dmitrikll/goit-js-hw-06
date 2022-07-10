const userInput = document.querySelector('#name-input' );
const userSpan = document.querySelector('#name-output');

userInput.addEventListener('input', newInput);

function newInput(txt) {
    userSpan.textContent = txt.currentTarget.value;

    if (txt.currentTarget.value === "") {
        userSpan.textContent = 'Anonymous'
    }
}