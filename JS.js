//Game Board Module
let gameBoardModule = (function () {
  let gameBoard = [];
  return {};
})();

//Setting up the displayController module

let displaycontrollerModule = (function () {
  let testF = () => {
    console.log("testing private function call");
  };
  return { testF };
})();

//Setting up the player factory function

document.getElementById("myButton1").onclick = function () {
  let player1Name = document.getElementById("player1Name").value;
  console.log("Hello ", player1Name);
  const div = document.createElement("div");
  div.classList.add("welcomeMessage1");
  div.innerHTML = "Welcome " + player1Name + ", You will be using 'X'";
  player1.appendChild(div);
};

document.getElementById("myButton2").onclick = function () {
  let player2Name = document.getElementById("player2Name").value;
  console.log("Hello ", player2Name);
  const div = document.createElement("div");
  div.classList.add("welcomeMessage2");
  div.innerHTML = "Welcome " + player2Name + ", You will be using 'O'";
  player2.appendChild(div);
};

let createPlayer = (playerName, playerNumber, assignedXO) => {
  let getPlayerName = () => {
    playerName;
    console.log(
      "This is the name of player " + playerNumber + "....." + playerName
    );
  };
  return { getPlayerName, playerName, playerNumber, assignedXO };
};

Scott = createPlayer(player1Name, 1, "X");
Jasmine = createPlayer(player2Name, 2, "O");

//Add an X in Div when player 1 clicks

let cells = document.querySelectorAll(".cell");
cells = Array.from(cells);

let currentPlayer = "X";

let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkForWinner() {
  winningCombinations.forEach(function (combination) {
    let check = combination.every(
      (idx) => cells[idx].innerText.trim() == currentPlayer
    );
    if (check) {
      highlightCells(combination);
    }
    if (check) {
      winningMessage(combination);
    }
    if (check) {
      displayNone(combination);
    }
    if (check) {
      createButton(combination);
    }
  });
}

function highlightCells(combination) {
  combination.forEach(function (idx) {
    cells[idx].classList.add("highlight");
  });
}

function winningMessage(combination) {
  const div = document.createElement("div");
  div.classList.add("winMessage");
  div.innerHTML = `Congratulations <span>${currentPlayer}</span>, you have won!`;
  bottom.appendChild(div);
}

function displayNone(combination) {
  document.getElementById("gameGrid").style.display = "none";
}

function createButton(combination) {
  const button = document.createElement("button");
  button.classList.add("resetButton");
  button.textContent = "Reset";
  let clearDiv = document.querySelector(".winMessage");
  let startGrid = document.querySelector("#gameGrid");
  let startGrid1 = document.querySelector(".cell");
  // button.addEventListener("click", () => {
  // clearDiv.style.display = "none";
  //startGrid.style.display = "grid";
  //});

  //bottom.appendChild(button);
}

//Restart Game

cells.forEach(function (cell) {
  cell.addEventListener("click", function () {
    if (cell.innerText.trim() != "") return;
    cell.innerText = currentPlayer;
    checkForWinner();
    currentPlayer = currentPlayer == "X" ? "O" : "X";
  });
});

let btnReset = document.querySelector(".resetButton");
let divReset = document.querySelectorAll(".cell");
let winMessage = document.querySelector(".winMessage");

// Module = gameBoard and Display board
// Player is a factor object

// TODO on submit name, say Welcome "Name" on the HTML
//TODO When clicking a square in the grid, mark X for player 1 and O for player 2
