var gameBoard = {
    top: [0, 0, 0],
    middle: [0, 0, 0],
    bottom: [0, 0, 0],
  }





function checkWin() {
    var arrays = ['top','middle','bottom'];
    for (var i = 0; i < gameBoard.top.length; i++) {
      if (gameBoard.top[i] === gameBoard.middle[i] && gameBoard.middle[i] === gameBoard.bottom[i] && gameBoard.top[i] != 0) {
        return console.log("WIN");
      }
    }
    for(var i = 0; i < arrays.length; i++){
      if(gameBoard[arrays[i]][0] === gameBoard[arrays[i]][1] && gameBoard[arrays[i]][1] === gameBoard[arrays[i]][2] && gameBoard[arrays[i]][0] !=0 ){
        return console.log("WIN");
      }
    }
    if( gameBoard.top[0] === gameBoard.middle[1] && gameBoard.middle[1] === gameBoard.bottom[2] && gameBoard.top[0] != 0){
      return console.log("WIN");
    }
    else if( gameBoard.top[2] === gameBoard.middle[1] && gameBoard.middle[1] === gameBoard.bottom[0] && gameBoard.top[2] != 0){
      return console.log("WIN");
    }
  }