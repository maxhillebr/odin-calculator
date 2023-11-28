// how does a calculator work?
// hit number as often as possible
// add currentOperant
// add another number

// 1. Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.

function add(a, b) {
  console.log(Number(a) + Number(b));
  return Number(a) + Number(b);
}

function substract(a, b) {
  console.log(Number(a) - Number(b));
  return Number(a) - Number(b);
}

function multiply(a, b) {
  console.log(Number(a) * Number(b));
  return Number(a) * Number(b);
}

function divide(a, b) {
  console.log(Number(a) / Number(b));
  return Number(a) / Number(b);
}

// 2. A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.
// num1 + currentOperator + num2 -> Evaluate

let currentOperator = "";

// Update the Textcontent
let displayNumber = document.querySelector(".calc-display");
// present operator above display
let displayBefore = document.querySelector(".calc-before");

// store the num1 / num2 values
let currentNum1 = "";
let currentNum2 = "";

// Add click event for all number buttons. When clicked it should update the first num1 value.

// select number
let numbers = document.querySelectorAll(".number");

// loop for all .number buttons and add to current number + display it
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", getCurrentNum1);
}

function getCurrentNum1(event) {
  if (displayNumber.textContent === "0") {
    displayNumber.textContent = "";
  }
  displayNumber.textContent += event.target.value;
  currentNum1 += event.target.value;
  console.log("Current Num 1: " + currentNum1);
}

// loop for all .operant and store it to currentOperator; change to currentNum2
let operants = document.querySelectorAll(".operant");

for (let i = 0; i < operants.length; i++) {
  operants[i].addEventListener("click", getCurrentOperator);
}

function getCurrentOperator(event) {
  // remove / add events from .numbers
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].removeEventListener("click", getCurrentNum1);
    numbers[i].addEventListener("click", getCurrentNum2);
  }
  currentOperator = event.target.value;
  displayNumber.textContent = "0";
  displayBefore.textContent = currentNum1 + " " + currentOperator;
  console.log("The CurrentOperator is: " + currentOperator);
}

function getCurrentNum2(event) {
  if (displayNumber.textContent === "0") {
    displayNumber.textContent = "";
  }
  displayNumber.textContent += event.target.value;
  currentNum2 += event.target.value;
  console.log("Current Num 2: " + currentNum2);
}

// calculate the result
let buttonEval = document.querySelector(".evaluate");
buttonEval.addEventListener("click", evaluate);

function evaluate() {
  displayNumber.textContent = "";
  displayBefore.textContent += " " + currentNum2;
  if (currentOperator == "+") {
    let addResult = add(currentNum1, currentNum2);
    displayNumber.textContent = addResult;
    currentNum1 = addResult;
    currentNum2 = "";
  }
  if (currentOperator == "-") {
    let addResult = substract(currentNum1, currentNum2);
    displayNumber.textContent = addResult;
    currentNum1 = addResult;
    currentNum2 = "";
  }
  if (currentOperator == "*") {
    let addResult = multiply(currentNum1, currentNum2);
    displayNumber.textContent = addResult;
    currentNum1 = addResult;
    currentNum2 = "";
  }
  if (currentOperator == "/") {
    let addResult = divide(currentNum1, currentNum2);
    displayNumber.textContent = addResult;
    currentNum1 = addResult;
    currentNum2 = "";
  }
  return;
}

// clear all
let buttonAC = document.querySelector(".reset");
buttonAC.addEventListener("click", clearAll);

function clearAll() {
  currentNum1 = "";
  currentNum2 = "";
  currentOperator = "";

  displayNumber.textContent = "0";
  displayBefore.textContent = "";

  for (let i = 0; i < numbers.length; i++) {
    numbers[i].removeEventListener("click", getCurrentNum2);
    numbers[i].addEventListener("click", getCurrentNum1);
  }
}
