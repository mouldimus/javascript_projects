function dictionary() {
  const car = {
    color: "blue",
    wheels: 4,
    door: 4,
    brand: "bmw",
    model: "x5",
    seat: 4,

    start() {
      console.log("started");
    },

    stop() {
      console.log("stopped");
    },

    decelerate() {
      console.log("decelerating");
    },

    accelerate() {
      console.log("accelerating");
    },
  };
  document.getElementById("Dictionary").innerHTML = car.color;
}
