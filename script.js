// how does a calculator work?
// hit number as often as possible
// add currentOperant
// add another number

// 1. Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.

function add(a, b) {
  let result = Number(a) + Number(b);
  let roundResult = Math.round(result * 1e2) / 1e2;
  console.log("The roundResult is: " + roundResult);
  return roundResult;
}

function substract(a, b) {
  let result = Number(a) - Number(b);
  let roundResult = Math.round(result * 1e2) / 1e2;
  console.log("The roundResult is: " + roundResult);
  return roundResult;
}

function multiply(a, b) {
  let result = Number(a) * Number(b);
  let roundResult = Math.round(result * 1e2) / 1e2;
  console.log("The roundResult is: " + roundResult);
  return roundResult;
}

function divide(a, b) {
  let result = Number(a) / Number(b);
  let roundResult = Math.round(result * 1e2) / 1e2;
  console.log("The roundResult is: " + roundResult);
  return roundResult;
}

function remainder(a, b) {
  let result = Number(a) % Number(b);
  let roundResult = Math.round(result * 1e2) / 1e2;
  console.log("The roundResult is: " + roundResult);
  return roundResult;
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

  // change delete button for currentNum2 input;
  buttonDelete.removeEventListener("click", deleteLastInput1);
  buttonDelete.addEventListener("click", deleteLastInput2);

  // change dot button für currentNum2;
  buttonDot.removeEventListener("click", createDot1);
  buttonDot.addEventListener("click", createDot2);

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

  // change delete button
  buttonDelete.removeEventListener("click", deleteLastInput2);
  buttonDelete.addEventListener("click", deleteLastInput1);

  // change dot button for currentNum1
  buttonDot.removeEventListener("click", createDot2);
  buttonDot.addEventListener("click", createDot1);

  // change .numbers button to currentNum1
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].removeEventListener("click", getCurrentNum2);
    numbers[i].addEventListener("click", getCurrentNum1);
    console.log("Numbers is now for currentNum1");
  }

  if (currentOperator == "+") {
    let addResult = add(currentNum1, currentNum2);
    displayNumber.textContent = addResult;
    currentNum1 = addResult;
    currentNum2 = "";
    // console.log(typeof currentNum1);
    // console.log("The currentNum1 and 2 is: " + currentNum1 + " " + currentNum2);
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
  if (currentOperator == "%") {
    let addResult = remainder(currentNum1, currentNum2);
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

// delete last
let buttonDelete = document.querySelector(".delete");
buttonDelete.addEventListener("click", deleteLastInput1);

// delete for all currentNum1
function deleteLastInput1() {
  if (typeof currentNum1 === "number") {
    currentNum1 = currentNum1.toString();
    console.log(typeof currentNum1);
  }
  let deleteStr = currentNum1.slice(0, -1);
  if (currentNum1.length > 1) {
    currentNum1 = deleteStr;
    displayNumber.textContent = currentNum1;
    console.log("The currentNum1 is: " + currentNum1);
  } else {
    currentNum1 = "";
    displayNumber.textContent = "0";
    console.log("The currentNum1 is: " + currentNum1);
    console.log(typeof currentNum1);
  }
}

// delete for all currentNum1
function deleteLastInput2() {
  console.log(currentNum2.length);

  let deleteStr = currentNum2.slice(0, -1);
  if (currentNum2.length > 1) {
    currentNum2 = deleteStr;
    displayNumber.textContent = currentNum2;
  } else {
    currentNum2 = "";
    displayNumber.textContent = "0";
  }
}

// add comma to equation
let buttonDot = document.querySelector(".dot");
buttonDot.addEventListener("click", createDot1);

function createDot1(event) {
  if (typeof currentNum1 === "number") {
    currentNum1 = currentNum1.toString();
    console.log(typeof currentNum1);
  }
  // avoid dot dublicate
  let substr = ".";
  let checkForDot = currentNum1.includes(substr);

  if (displayNumber.textContent == "0") {
    currentNum1 = "0";
  } else if (checkForDot === true) {
    return console.log("Already pressed dot!");
  } else {
    displayNumber.textContent += event.target.value;
    currentNum1 += event.target.value;
    console.log("The currentNum1 with dot: " + currentNum1);
  }
}

function createDot2(event) {
  if (typeof currentNum2 === "number") {
    currentNum2 = currentNum2.toString();
    console.log(typeof currentNum2);
  }
  // avoid dot dublicate
  let substr = ".";
  let checkForDot = currentNum2.includes(substr);

  if (displayNumber.textContent == "0") {
    currentNum2 = "0";
  } else if (checkForDot === true) {
    return console.log("Already pressed dot!");
  } else {
    displayNumber.textContent += event.target.value;
    currentNum2 += event.target.value;
    console.log("The currentNum1 with dot: " + currentNum2);
  }
}
