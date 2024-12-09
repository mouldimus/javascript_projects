function rideFunction() {
  let height, canRide;
  height = document.getElementById("height").value;
  canRide = height < 52 ? "You are too short" : "You are tall enough";
  document.getElementById("ride").innerHTML = canRide + " to ride.";
}
