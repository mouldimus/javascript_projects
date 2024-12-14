function colorFunction() {
  var color = document.getElementById("color").value;
  console.log(color);
  var output;
  var str = " is a great color!";
  switch (color) {
    case "red":
      output = "Red" + str;
      break;
    case "green":
      output = "Green" + str;
      break;
    case "blue":
      output = "Blue" + str;
      break;
    case "yellow":
      output = "Yellow" + str;
      break;
    case "purple":
      output = "Purple" + str;
      break;
    case "orange":
      output = "Orange" + str;
      break;
    default:
      output = "Please choose a color!";
  }

  document.getElementById("output").innerHTML = output;
}
