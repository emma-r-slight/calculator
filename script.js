//identify buttons when clicked
let calcArray = [];
let displayCurrent = 0;
// const numBtn = document.querySelectorAll('.number-btn');
let calcScreen = document.querySelector('.screen');
const keys = document.querySelector('.calculator-keys');

function updateDisplay(e) {
  clicked = e.target.innerHTML;
  calcScreen.value = calcScreen.value + clicked;
}

keys.addEventListener('click', updateDisplay);
// numBtn.forEach((btn) => {
//   btn.addEventListener('click', updateDisplay);
// });

// updateDisplay();

// Check if the clicked element is a button.
// If not, exit from the function
// if (!target.matches("button")) {
//   return;
// }

// if (target.classList.contains("operator")) {
//   console.log("operator", target.value);
//   return;
// }

// if (target.classList.contains("decimal")) {
//   console.log("decimal", target.value);
//   return;
// }

// if (target.classList.contains("all-clear")) {
//   console.log("clear", target.value);
//   return;
// }

// const numberButtons = document.querySelectorAll("[number-btn]");
// numberButtons.forEach()

// const clearBtn = document.querySelector("[data-action-clear]");
// const deleteBtn = document.querySelector("[data-action-delete]");
// const operatorBtn = document.querySelectorAll("[data-action]");

// let displayPrevious = 0;

// numberButtons.onclick;

// function updateDisplay() {
//   console.log("i am clicked");

// operatorButton.forEach((button) => {
//   button.addEventListener("click", operation, false);
// });
