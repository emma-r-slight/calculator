//identify buttons when clicked
let calcArray = [];
// const numBtn = document.querySelectorAll('.number-btn');
let screen = document.querySelector('.screen');

const calculator = document.querySelector('.calculator');
//using event "bubbling" get all calculator buttons
const keys = document.querySelector('.calculator-keys');

// update calculator screen evert time button is clicked
// function updateDisplay(e) {
//   clicked = e.target.innerHTML;
//   console.log(clicked);

//   calcScreen.value = calcScreen.value + clicked;
// }

keys.addEventListener('click', (e) => {
  const clicked = e.target;
  const operand = clicked.dataset.action;
  const keyValue = clicked.textContent;
  const currentNum = screen.textContent;
  // const previousKeyType = calculator.dataset.previousKeyType;

  Array.from(clicked.parentNode.children).forEach((btn) =>
    btn.classList.remove('is-depressed')
  );

  if (clicked.matches('button')) {
    if (!operand) {
      if (currentNum === '0' || previousKeyType === calcKey) {
        screen.textContent = keyValue;
      } else {
        screen.textContent = currentNum + keyValue;
      }
    }
    if (operand === 'decimal') {
      screen.textContent = currentNum + '.';
    }
    if (
      operand === '+' ||
      operand === '-' ||
      operand === '*' ||
      operand === '/'
    ) {
      keyValue.classList.add('.is-depressed');

      calculator.dataset.previousKeyType = 'calcKey';
      calculator.dataset.firstValue = currentNum;
      calculator.dataset.calcKey = operator;
    }
    if (operand === 'calculate') {
      const secondValue = currentNum;
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;

      if (firstValue && operator && previousKeyType != 'operator') {
        screen.textContent = calculate(firstValue, operator, secondValue);
      }

      const calculate = (num1, operator, num2) => {
        let result = '';

        if (operand === '+') {
          result = parseFloat(n1) + parseFloat(n2);
        } else if (operand === '-') {
          result = parseFloat(n1) - parseFloat(n2);
        } else if (operand === '*') {
          result = parseFloat(n1) * parseFloat(n2);
        } else if (operand === '/');
        {
          result = parseFloat(n1) / parseFloat(n2);
        }
        return result;
      };
    }
  }
});

//     if (operand === 'clear') {
//       console.log('clear');
//     }
//   }
// });

//!!! This worked but wanted a more simple way of identifying different keys so changed to data attributes...

//   if (e.target.classList.contains('key--operand')) {
//     console.log('operand');
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

// if (target.classList.contains("operand")) {
//   console.log("operand", target.value);
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
