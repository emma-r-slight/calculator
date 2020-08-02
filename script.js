//identify buttons when clicked
let calcArray = [];
let displayCurrent = 0;
// const numBtn = document.querySelectorAll('.number-btn');
let calcScreen = document.querySelector('.screen');

//using event "bubbling" get all calculator buttons
const keys = document.querySelector('.calculator-keys');

// udate calculator screen evert time button is clicked
function updateDisplay(e) {
  clicked = e.target.innerHTML;
  console.log(clicked);

  calcScreen.value = calcScreen.value + clicked;
}

keys.addEventListener('click', (e) => {
  const clicked = e.target;
  const operator = clicked.dataset.action;
  if (clicked.matches('button')) {
    if (!operator) {
      console.log('is number');
    }
    if (
      operator === '+' ||
      operator === '-' ||
      operator === '*' ||
      operator === '/'
    ) {
      console.log('is operator');
    }
    if (operator === 'decimal') {
      console.log('this is a decimal');
    }
    if (operator === 'calculate') console.log('calculate!');

    if (operator === 'clear') {
      console.log('clear');
    }
  }
});

//!!! This worked but wanted a more simple way of identifying different keys so changed to data attributes...

//   if (e.target.classList.contains('key--operator')) {
//     console.log('operator');
//   }
//   if (e.target.classList.contains('decimal')) {
//     console.log('Decimal');
//   }
//   if (e.target.classList.contains('key--equal')) {
//     console.log('equals');
//   } else {
//     console.log('is number');
//   }
// }
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
