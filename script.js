// how does a calculator work?
// hit number as often as possible
// add currentOperant
// add another number

// -------first idea--------
let calculation = [];
let calcDisplay = document.querySelector(".calc-display");

let buttonAC = document.querySelector(".div1");
buttonAC.addEventListener("click", () => {
  calculation = [];
  return (calcDisplay.textContent = calculation);
});

// num9
let button9 = document.querySelector(".div7");
button9.addEventListener("click", displayNum9);

function displayNum9() {
  calculation.push(button9.value);
  console.log(calculation);
  return (calcDisplay.textContent += 9);
}

// operant *
let operantMultiply = document.querySelector(".div8");
operantMultiply.addEventListener("click", displayMultiply);

function displayMultiply() {
  calculation.push(operantMultiply.value);
  console.log(calculation);
  return (calcDisplay.textContent += "*");
}
