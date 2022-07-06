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
let createPlayer = (playerName, playerNumber, assignedXO) => {
  let getPlayerName = () => {
    playerName;
    console.log(
      "This is the name of player " + playerNumber + "....." + playerName
    );
  };
  return { getPlayerName, playerName, playerNumber, assignedXO };
};

//TODO: Get inputs for name number and XO

// Module = gameBoard and Display board
// Player is a factor object
