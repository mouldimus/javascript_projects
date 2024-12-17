// Player state variable
let activePlayer = "X";
// This array stores an array of moves. We use this to determine win condition.
let selectedSquares = [];

// This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
  // This condition ensures a square hasn't been selected already.
  // The .some() method is used to check each element to the selectSquare array
  // to see if it contains the square number clicked on.
  if (!selectedSquares.some((element) => element.includes(squareNumber))) {
    // If variable retrieves the HTML element id that was clicked on.
    let select = document.getElementById(squareNumber);
    // This condition checks who's turn it is.
    if (activePlayer === "X") {
      // If activePlayer is equal to X, the x.png is placed in HTML.
      select.style.backgroundImage = 'url("images/x.png")';
      // Active player may only be 'X' or 'O' so, if not X it must be O
    } else {
      select.style.backgroundImage = 'url("images/o.png")';
    }
    // squareNumber and activePlayer are concatenated together and added to array
    selectedSquares.push(squareNumber + activePlayer);
    // This calls a function to check for any win conditions.
    checkWinConditions();
    // Thsi condition is for changing the active player.
    if (activePlayer === "X") {
      // If active player is 'X' change it to 'O'.
      activePlayer = "O";
    } else {
      // If active player is 'O' change it to 'X'.
      activePlayer = "X";
    }

    // This function plays placement sound.
    audio("media/place.mp3");
    // This condition checks to see if it is the computer's turn.
    if (activePlayer === "O") {
      // This function disables clicking for the computers turn.
      disableClick();
      // This function waits 1 second before the computer places an image and enables click.
      setTimeout(function () {
        computersTurn();
      }, 1000);
    }
    // Returning true is needed for our computersTurn() function to work.
    return true;
  }
  // This function results in a random square being selected by the computer.
  function computersTurn() {
    // This boolean is needed for our while loop.
    let success = false;
    // This variable stores a random number 0-8.
    let pickASquare;
    // This condition allows our while loop to keep trying if a square is already selected.
    while (!success) {
      // A random number between 0 and 8 is selected.
      pickASquare = String(Math.floor(Math.random() * 9));
      if (placeXOrO(pickASquare)) {
        // This line calls the function.
        placeXOrO(pickASquare);
        // This changes our boolean and ends the loop.
        success = true;
      }
    }
  }
}
