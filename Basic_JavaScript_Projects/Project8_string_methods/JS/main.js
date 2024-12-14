function concat() {
  let x = "Hello ";
  let y = "World!";
  let z = x.concat(y);
  document.getElementById("concat").innerHTML = z;
}
function slice() {
  let longString = "The quick brown fox jumps over the lazy dog.";
  let shortString = longString.slice(0, 10);
  document.getElementById("slice").innerHTML = shortString;
}
function stringMethod() {
  let x = 182;
  let y = x.toString();
  document.getElementById("numbersToString").innerHTML = y;
}
function precisionMethod() {
  let x = 1234.56789;
  let y = x.toPrecision(5);
  document.getElementById("precision").innerHTML = y;
}
