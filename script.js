const screen = document.getElementById("screen");
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateScreen();
}

function setOperator(op) {
  operator = op;
  previousInput = currentInput + ' ' + operator;
  currentInput = '';
  updateScreen();
}

function clearScreen() {
  currentInput = '';
  operator = '';
  previousInput = '';
  updateScreen();
}

function calculate() {
    let result;
  
    if (operator === '+') {
      result = parseFloat(previousInput) + parseFloat(currentInput);
    } else if (operator === '-') {
      result = parseFloat(previousInput) - parseFloat(currentInput);
    } else if (operator === '*') {
      result = parseFloat(previousInput) * parseFloat(currentInput);
    } else if (operator === '/') {
      result = parseFloat(previousInput) / parseFloat(currentInput);
    }
  
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateScreen();
  }
  

function updateScreen() {
  screen.value = previousInput + ' ' + currentInput;
}