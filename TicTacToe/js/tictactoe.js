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

// This function parses the selectedSquares array to search for win conditions.
// drawLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
  if (arrayIncludes("OX", "1X", "2X")) {
    drawWinLine(50, 100, 558, 100);
  } else if (arrayIncludes("3X", "4X", "5X")) {
    drawWinLine(50, 304, 558, 304);
  } else if (arrayIncludes("6X", "7X", "8X")) {
    drawWinLine(50, 508, 558, 508);
  } else if (arrayIncludes("0X", "3X", "6X")) {
    drawWinLine(100, 50, 100, 558);
  } else if (arrayIncludes("1X", "4X", "7X")) {
    drawWinLine(304, 50, 508, 558);
  } else if (arrayIncludes("2X", "5X", "8X")) {
    drawWinLine(508, 50, 508, 558);
  } else if (arrayIncludes("6X", "4X", "2X")) {
    drawWinLine(100, 508, 510, 90);
  } else if (arrayIncludes("0X", "4X", "8X")) {
    drawWinLine(100, 100, 520, 520);
  } else if (arrayIncludes("00", "10", "20")) {
    drawWinLine(50, 100, 558, 304);
  } else if (arrayIncludes("30", "40", "50")) {
    drawWinLine(50, 304, 558, 304);
  } else if (arrayIncludes("60", "70", "80")) {
    drawWinLine(50, 508, 558, 508);
  } else if (arrayIncludes("00", "30", "60")) {
    drawWinLine(100, 50, 100, 558);
  } else if (arrayIncludes("10", "40", "70")) {
    drawWinLine(304, 50, 304, 558);
  } else if (arrayIncludes("20", "50", "80")) {
    drawWinLine(508, 50, 508, 558);
  } else if (arrayIncludes("60", "40", "20")) {
    drawWinLine(100, 508, 510, 90);
  } else if (arrayIncludes("00", "40", "80")) {
    drawWinLine(100, 100, 520, 520);
  }
  // This condition checks for a tie. If none of the above conditions are met and
  // 9 squares are selected the code executes.
  else if (selectedSquares.length >= 9) {
    // This function plays the tie game sound.
    audio("./media/tie.mp3");
    // This function sets a .5 second timer before the resetGame is called.
    setTimeout(function () {
      resetGame();
    }, 500);
  }

  // This function checks if an array includes 3 strings. It is used to check for
  // each win condition.
  function arrayIncludes(squareA, squareB, squareC) {
    // These 3 variables will be used to check for 3 in a row.
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    // If the 3 variables we pass are all included in our array then
    // true is returned and our else if condition executes the drawLine() function.
    if (a === true && b === true && c === true) {
      return true;
    }
  }
}

// This function makes our body element temporarily unclickable.
function disableClick() {
  // This make our body unclickable.
  body.style.pointerEvents = "none";
  // This makes our body clickable again after 1 second.
  setTimeout(function () {
    body.style.pointerEvents = "auto";
  }, 1000);
}

// This function takes a string parameter of the path you set earlier for
// placement sound('./media/place.mp3').
function audio(audioURL) {
  // We create a new audio object and we pass the path as a parameter.
  let audio = new Audio(audioURL);
  // Play method plays our audio sound.
  audio.play();
}

// This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
  // This line accesses our HTML canvas element.
  const canvas = document.getElementById("win-lines");
  // This line gives us access to methids and properties to use on our canvas.
  const c = canvas.getContext("2d");
  // This line indicates where the start of a line x axis is.
  let x1 = coordX1,
    y1 = coordY1,
    x2 = coordX2,
    y2 = coordY2,
    x = x1,
    y = y1;

  // This function interacts with the canvas.
  function animateLineDrawing() {
    // This variable creates a loop.
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    // This method clears content from the last loop iteration.
    c.clearRect(0, 0, 608, 608);
    // This method starts a new path.
    c.beginPath();
    // This method moves us to a starting point in our line.
    c.moveTo(x1, y1);
    // This method indicates the end point in our line.
    c.lineTo(x, y);
    // This method sets the width of our line.
    c.lineWidth = 10;
    // This method sets the color of our line.
    c.strokeStyle = "rgba(70,255,33,.8)";
    // This method draws everything we laid out above.
    c.stroke();
    // This condition checks if we've reached the endpoints.
    if (x1 <= x2 && y1 <= y2) {
      if (x < x2) {
        x += 10;
      }
      if (y < y2) {
        y += 10;
      }
      if (x >= x2 && y >= y2) {
        cancelAnimationFrame(animationLoop);
      }
    }
    if (x1 <= x2 && y1 >= y2) {
      if (x < x2) {
        x += 10;
      }
      if (y > y2) {
        y -= 10;
      }
      if (x >= x2 && y <= y2) {
        cancelAnimationFrame(animationLoop);
      }
    }
  }

  // This function clears our canvas after our win line is drawn.
  function clear() {
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0, 0, 608, 608);
    cancelAnimationFrame(animationLoop);
  }
  // This line disallows clicking while the win sound is playing
  disableClick();
  // This line plays the win sounds.
  audio("./media/winGame.mp3");
  // This line calls our main animation loop.
  animateLineDrawing();
  // This line waits 1 second. Then, clears canvas, resets game, and allows clicking again.
  setTimeout(function () {
    clear();
    resetGame();
  }, 1000);
}

// This function resets the game in the event of a tie or a win.
function resetGame() {
  for (let i = 0; i < 9; i++) {
    let square = document.getElementById(String(i));
    square.style.backgroundImage = "";
  }
  selectedSquares = [];
}
