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
