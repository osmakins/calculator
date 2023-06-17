// Get the names of the HTML elements
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const keys = document.querySelectorAll(".key");

// Declare some variables to store the numbers and symbols
let firstOperand = "";
let secondOperand = "";
let operator = "";
let result = "";

// Define a function to show the numbers and symbols on the screen
function updateDisplay(value) {
  // If the screen is empty or shows zero, replace it with the value
  if (display.value === "" || display.value === "0") {
    display.value = value;
  } else {
    // Otherwise, add the value to the screen
    display.value += value;
  }
}

// Define a function to erase everything on the screen
function clearDisplay() {
  display.value = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  result = "";
}

// Define a function to do the math problem based on the operator
function calculate() {
  // Change the numbers from words to numbers
  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);

  // Use a switch statement to do different things with different operators
  switch (operator) {
    case "+":
      // Add the numbers and store the answer
      result = firstOperand + secondOperand;
      break;

    case "-":
      // Subtract the numbers and store the answer
      result = firstOperand - secondOperand;
      break;

    case "*":
      // Multiply the numbers and store the answer
      result = firstOperand * secondOperand;
      break;

    case "/":
      // Check if the second number is zero
      if (secondOperand === 0) {
        // If yes, return an error message
        return "Error";
      } else {
        // If no, divide the numbers and store the answer
        result = firstOperand / secondOperand;
      }
      break;

    default:
      // If no operator is selected, return an error message
      return "Error";
  }

  // Return the answer as a word
  return result.toString();
}

// Add an event listener to the clear button to erase everything when clicked
clear.addEventListener("click", function () {
  clearDisplay();
});

// Loop through all the keys and add event listeners to them
keys.forEach(function (key) {
  key.addEventListener("click", function () {
    // Get the value of the clicked key
    let value = key.value;

    // Check if the value is a number or a decimal point
    if (!isNaN(value) || value === ".") {
      // If yes, show the value on the screen
      updateDisplay(value);

      // Check if an operator has been selected
      if (operator) {
        // If yes, assign the value to the second operand
        secondOperand += value;
      } else {
        // If no, assign the value to the first operand
        firstOperand += value;
      }
    }

    // Check if the value is an operator
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      // If yes, show the value on the screen
      updateDisplay(value);

      // Assign the value to the operator
      operator = value;
    }

    // Check if the value is an equal sign
    if (value === "=") {
      // If yes, do the math problem and store the answer
      result = calculate();

      // Show the answer on the screen
      display.value = result;

      // Reset the operands and operator
      firstOperand = "";
      secondOperand = "";
      operator = "";
    }
  });
});

