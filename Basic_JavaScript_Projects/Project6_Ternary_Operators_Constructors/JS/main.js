function rideFunction() {
  let height, canRide;
  height = document.getElementById("height").value;
  canRide = height < 52 ? "You are too short" : "You are tall enough";
  document.getElementById("ride").innerHTML = canRide + " to ride.";
}

function Vehicle(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}
let jack = new Vehicle("Dodge", "Viper", 2020, "red");
let emily = new Vehicle("Jeep", "Trail Hawk", 2019, "blue");
let erik = new Vehicle("Ford", "Pinto", 1971, "black");
function myFunction() {
  document.getElementById("keywordsAndConstructors").innerHTML =
    "Erik drives a " +
    erik.color +
    "-coloured " +
    erik.model +
    " manufactured in " +
    erik.year;
}
