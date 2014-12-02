// Spielzüge sollen aufgenommen werden
var moveLog = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// Spielzüge sollen gezählt werden
var turnNo = 1;

// die 8 Möglichkeiten ein Spiel zu gewinnen müssen eingeführt werden
var leftColWin = []; //1
var midColWin = []; //2
var rightColWin = []; //3
var topRowWin = []; //4
var midRowWin = []; //5
var bottomRowWin = []; //6
var leftDiagWin = []; //7
var rightDiagWin = []; //8

// die 8 Möglichkeiten ein Spiel zu gewinnen müssen definiert werden
function linesOfThree() {
  leftColWin = [ moveLog[0], moveLog[3], moveLog[6] ];
  midColWin = [ moveLog[1], moveLog[4], moveLog[7] ];
  rightColWin = [ moveLog[2], moveLog[5], moveLog[8] ];
  topRowWin = moveLog.slice(0, 3);
  midRowWin = moveLog.slice(3, 6);
  bottomRowWin = moveLog.slice(-3);
  leftDiagWin = [ moveLog[0], moveLog[4], moveLog[8] ];
  rightDiagWin = [ moveLog[2], moveLog[4], moveLog[6] ];
}

// Soll das Spiel beendet oder weitergeführt werden?
var gameEnd = "no";

// die Positionen der einzelnen Steine auf dem Spielfeld 
function getPlayPosition(squareNo) {
  switch (squareNo) {
    case 1:
      return document.getElementById("sqTopLeft");
    case 2:
      return document.getElementById("sqTopMiddle");
    case 3:
      return document.getElementById("sqTopRight");
    case 4:
      return document.getElementById("sqMiddleLeft");
    case 5:
      return document.getElementById("sqMiddleMiddle");
    case 6:
      return document.getElementById("sqMiddleRight");
    case 7:
      return document.getElementById("sqBottomLeft");
    case 8:
      return document.getElementById("sqBottomMiddle");
    case 9:
      return document.getElementById("sqBottomRight");
  }
}


// Diese Funktion benachrichtigt die Spieler, wer am Zug ist.
var playerTurn = 1;

function nextTurn(playerNo) {
  if (playerNo === 1) {
    playerTurn = 2;
    $('.message').html("Spieler 2 ist am Zug!").removeClass("align-left")
    .addClass("align-right");
  }
  else if (playerNo === 2) {
    playerTurn = 1;
    $('.message').html("Spieler 1 ist am Zug!").removeClass("align-right")
    .addClass("align-left");
  }
}

// Diese Funktion benachrichtigt die Spieler, wenn jemand gewonnen hat.
function checkWin() {
  linesOfThree();
  
  if (leftColWin.toString() == "O,O,O" ||
      midColWin.toString() == "O,O,O" ||
      rightColWin.toString() == "O,O,O" ||
      topRowWin.toString() == "O,O,O" ||
      midRowWin.toString() == "O,O,O" ||
      bottomRowWin.toString() == "O,O,O" ||
      leftDiagWin.toString() == "O,O,O" ||
      rightDiagWin.toString() == "O,O,O")
  {     
    $('.message').html("Spieler 1 hat gewonnen!").removeClass("align-right align-left");
    gameEnd = "yes";
    $('.resetButton').removeClass("hide");
  }
  
  else if (leftColWin.toString() == "X,X,X" ||
      midColWin.toString() == "X,X,X" ||
      rightColWin.toString() == "X,X,X" ||
      topRowWin.toString() == "X,X,X" ||
      midRowWin.toString() == "X,X,X" ||
      bottomRowWin.toString() == "X,X,X" ||
      leftDiagWin.toString() == "X,X,X" ||
      rightDiagWin.toString() == "X,X,X") 
  {  
    $('.message').html("Spieler 2 gewinnt!").removeClass("align-right align-left");
    gameEnd = "yes";
    $('.resetButton').removeClass("hide");
  }
  
  else {
    //mach nichts
  }
}

// Diese Funktion wird bei einem Unentschieden ausgelöst.
function checkCatsGame() {
  if (turnNo == 10 && gameEnd == "no") {
    $('.message').html("Das Spiel endet mit einem Unentschieden").removeClass("align-right align-left");
    gameEnd = "yes";
    $('.resetButton').removeClass("hide");
  }
  else {
    //mach nichts
  }
}

// Diese Funktion rechnet die Gewinnbedingungen für die Spieler aus.
function makePlay(playerNo, position) {
  if (getPlayPosition(position).innerHTML === "X" || 
      getPlayPosition(position).innerHTML === "O") {
  }
  else if (playerNo === 1) {
    getPlayPosition(position).innerHTML = "O";
    moveLog[position - 1] = "O";
    nextTurn(1);
    turnNo++;
  }
  else if (playerNo === 2) {
    getPlayPosition(position).innerHTML = "X";
    moveLog[position - 1] = "X";
    nextTurn(2);
    turnNo++;
  }
  checkWin();
  checkCatsGame();
}

// Diese Funktion lässt den Spieler seine Steine setzen.
function sqPlayed(squareNo) {
  if (gameEnd == "no") {
    if (playerTurn === 1) {
      makePlay(1, squareNo);  
    }
    else if (playerTurn === 2) {
      makePlay(2, squareNo);
    }
  }
  else if (gameEnd == "yes") {
    //mach nichts
  }
}

$('.resetButton').click(function() {
  $('.resetButton').addClass("hide");
  $('.play-square').html("");
  $('.message').html("Spieler 1 fängt an").removeClass("align-right")
  .addClass("align-left");
  
  gameEnd = "no";
  playerTurn = 1;
  turnNo = 1;
  
  moveLog = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  
  leftColWin = []; //1
  midColWin = []; //2
  rightColWin = []; //3
  topRowWin = []; //4
  midRowWin = []; //5
  bottomRowWin = []; //6
  leftDiagWin = []; //7
  rightDiagWin = []; //8
});