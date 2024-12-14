function callLoop() {
  let i = 0;
  while (i < 10) {
    document.getElementById("loop").innerHTML += i + "<br />";
    i++;
  }
}

function forLoop() {
  let listOfInstruments = ["guitar", "bass", "drums", "keyboards"];
  for (let i = 0; i < listOfInstruments.length; i++) {
    document.getElementById("listOfInstruments").innerHTML +=
      listOfInstruments[i] + "<br />";
  }
}

function arrayFunction() {
  let arr = [10, 20, 30, 40, 50];
  document.getElementById("array").innerHTML = arr;
}
