const numberButtons = document.querySelectorAll("[data-number]");
const clearBtn = document.querySelector("[data-action-clear");
const deleteBtn = document.querySelector("[data-action-delete]");
const currentValue = document.querySelector("[data-current-value]");
const previousValue = document.querySelector("[data-previous-value]");

let calcArray = [];
let displayCurrent = 0;
let displayPrevious = 0;

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", updateDisplay);
}

function updateDisplay() {
  console.log("yes click");
}

// numberButtons.forEach((button) => {
//   btn.addEventListener("click", (event) => {
//     console.log(event.target);
//   });
// });

// operatorButton.forEach((button) => {
//   button.addEventListener("click", operation, false);
// });
