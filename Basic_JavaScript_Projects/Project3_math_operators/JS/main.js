function addition() {
  let sum = 5 + 5;
  document.getElementById("Math").innerHTML = sum;
  return sum;
}

function subtraction() {
  let difference = 5 - 5;
  document.getElementById("Math").innerHTML = difference;
  return difference;
}

function multiplication() {
  let product = 5 * 5;
  document.getElementById("Math").innerHTML = product;
  return product;
}

function division() {
  let quotient = 5 / 5;
  document.getElementById("Math").innerHTML = quotient;
  return quotient;
}

document.addEventListener("click", calc);

function calc() {
  calculation = 5 / 100 + 5 * 25 - 8;
  console.log("Calculation: " + calculation);

  let mathElement = document.getElementById("Math");
  mathElement.appendChild(
    document.createTextNode("Calculation: " + calculation),
  );

  return calculation;
}
