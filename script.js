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
  checkForValues(currentNum1, currentOperator, currentNum2);
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
}

// control pressing evaluate if one value is missing

function checkForValues(a, b, c) {
  if (a === "") {
    console.log("no value in currentNum1");
    displayNumber.textContent = "0";
    a = "";
  }
  if (currentOperator === "") {
    console.log("no operator");
    displayNumber.textContent = "0";
    b = "";
  }
  if (currentNum2 === "") {
    console.log("no value in currentNum2");
    displayNumber.textContent = "0";
    c = "";
  }
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

// delete last
let buttonDelete = document.querySelector(".delete");
buttonDelete.addEventListener("click", deleteLastInput1);

function deleteLastInput1() {
  currentNum1 = currentNum1.toString();
  let deleteStr1 = currentNum1.slice(0, -1);

  if (currentNum1.length > 1 && currentOperator == "") {
    displayNumber.textContent = deleteStr1;
    currentNum1 = deleteStr1;
    console.log(currentNum1);
  } else if (currentNum1.length === 1) {
    currentNum1 = "";
    displayNumber.textContent = "0";
  }
  // for second current number
  let deleteStr2 = currentNum2.slice(0, -1);

  if (currentNum2.length > 1) {
    displayNumber.textContent = deleteStr2;
    currentNum2 = deleteStr2;
    console.log(currentNum2);
  } else if (currentNum2.length === 1) {
    currentNum2 = "";
    displayNumber.textContent = "0";
  }
}

// add decimals
let buttonDecimals = document.querySelector(".decimals");
buttonDecimals.addEventListener("click", addCommaToNum);

function addCommaToNum(event) {
  let string = currentNum1;
  let substring = ".";

  if (string.includes(substring) === true) {
    return console.log("only one comma allowed");
  } else {
    displayNumber.textContent += event.target.value;
    currentNum1 += event.target.value;
    console.log("Current Num 1: " + currentNum1);
  }
}
