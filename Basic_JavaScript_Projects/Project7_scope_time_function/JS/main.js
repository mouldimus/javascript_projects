let global = "This is a global variable";
function callLocal() {
  let local = "This is a local variable";
  console.log(global);
  console.log(local);
}
function causeError() {
  console.log(local);
}

callLocal();
causeError();

function changeName() {
  let input = document.getElementById("input").value;
  let hours = new Date().getHours();
  let output;
  if (hours < 12) {
    output = "Good morning " + input + "!";
  } else if (hours < 18) {
    output = "Good afternoon " + input + "!";
  } else {
    output = "Good evening " + input + "!";
  }

  document.getElementById("output").innerHTML = output;
}
