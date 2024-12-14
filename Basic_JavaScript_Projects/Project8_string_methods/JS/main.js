function concat() {
  var x = "Hello ";
  var y = "World!";
  var z = x.concat(y);
  document.getElementById("demo").innerHTML = z;
}
function slice() {
  let longString = "The quick brown fox jumps over the lazy dog.";
  let shortString = longString.slice(0, 10);
  document.getElementById("sliceOutput").innerHTML = shortString;
}
