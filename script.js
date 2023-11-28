// how does a calculator work?
// hit number as often as possible
// add currentOperant
// add another number

// 1. Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// 2. A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.
// num1 + currentOperator + num2 -> Evaluate

let num1 = 3;
let currentOperator = "/";
let num2 = 2;

function evaluate(a, b) {
  if (currentOperator === "+") {
    return add(a, b);
  }
  if (currentOperator === "-") {
    return substract(a, b);
  }
  if (currentOperator === "*") {
    return multiply(a, b);
  }
  if (currentOperator === "/") {
    return divide(a, b);
  }
  return console.log("No current operant?!");
}

// Add click event for all number buttons. When clicked it should update the first num1 value.

// Test for a number
let numbers = document.querySelectorAll(".number");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    return console.log(numbers[i].value);
  });
}
