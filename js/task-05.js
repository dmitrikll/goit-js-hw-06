const userInput = document.querySelector('#name-input' );
const userSpan = document.querySelector('#name-output');


// ver 1. - addEventListener + currentTarget
userInput.addEventListener('input', newInput);

function newInput(txt) {
    userSpan.textContent = txt.currentTarget.value;

    if (txt.currentTarget.value === "") {
        userSpan.textContent = 'Anonymous'
    }
};

// ver.2 - innerHTML
// userInput.oninput = function () {
//     if (userInput.value === '') {
//         userSpan.innerHTML = 'Anonymous';
//     } else {
//         userSpan.innerHTML = userInput.value;
//     };
// };