// each function is named to describe what the function does.
// each function is seperated into two parts:
// 1. what it will display
// 2. how it will display it

function addition() {
  let sum = 5 + 5;
  document.getElementById("addition").innerHTML = sum;
}

function subtraction() {
  let difference = 5 - 5;
  document.getElementById("subtraction").innerHTML = difference;
}

function multiplication() {
  let product = 5 * 5;
  document.getElementById("multiplication").innerHTML = product;
}

function division() {
  let quotient = 5 / 5;
  document.getElementById("division").innerHTML = quotient;
}

function modulus() {
  let remainder = 9 % 5;
  document.getElementById("modulus").innerHTML = remainder;
}

function unary() {
  let x = -10;
  document.getElementById("unary").innerHTML = x;
}

function increment() {
  let x = 10++;
  document.getElementById("increment").innerHTML = x;
}

function decrement() {
  let x = 10--;
  document.getElementById("decrement").innerHTML = x;
}

function random() {
  let x = Math.random() * 100;
  document.getElementById("random").innerHTML = x;
}
