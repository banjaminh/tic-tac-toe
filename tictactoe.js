var boardDisplay = document.querySelector('.board-display');


window.addEventListener('load', showBoard);
boardDisplay.addEventListener('click', function(e){
    playerMove(e)
});


var gameBoard = 
['','','',
'','','',
'','',''];

var player1 = createPlayer(1,'x');
var player2 = createPlayer(2,'o');
var currentPlayer = player1;
var startingPlayer = player1;
var moveCount = 0;

function createPlayer(id,token){
    return{
    id,
    token,
    wins: 0,
    }
}

function checkWin() {
    for (var i = 0; i < gameBoard.length; i+=3){
        if(gameBoard[i] === gameBoard[i+1] && gameBoard[i+2] === gameBoard[i] && gameBoard[i+2] != ''){
        return console.log("WIN");
        }
    }
    
    for (var i = 0; i< gameBoard.length; i++){
        if(gameBoard[i] === gameBoard[i+3] && gameBoard[i] === gameBoard[i+6] && gameBoard[i] !== ''){
            return console.log("WIN");
        }
    }

    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== ''){
        return console.log("WIN");
    }
    else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== ''){
        return console.log("WIN");
    }
}



function showBoard(){
    
    boardDisplay.innerHTML = "";
    for(var i = 0; i < gameBoard.length ; i ++){
        boardDisplay.innerHTML += `
        <section class="mini-grid" id=${i}>
            <p>${gameBoard[i]}</p>
        </section>
        `
    }
}

function playerSwap(){
    if(currentPlayer === player1){
        currentPlayer = player2;
    }
    else{
        currentPlayer = player1;
    }
}

function playerMove(e){
    console.log('test');
    var chosenIndex = parseInt(e.target.closest('section').id);
    if(gameBoard[chosenIndex] === ''){
        gameBoard[chosenIndex] = currentPlayer.token;
        moveCount++;
    }
    else{
        return console.log("INVALID SPOT");
    }
    showBoard();
    checkWin();
    checkCount();
    playerSwap();
}

function resetBoard(){
    for (var i = 0; i < gameBoard.length ; i++){
        gameBoard[i] = '';
    }
    showBoard();
}

function checkCount(){
    if (moveCount === 9){
        console.log("RESET");
        return true;
    }
    else{
        return false;
    }
}

// function checkWin() {
//     var arrays = ['top','middle','bottom'];
//     for (var i = 0; i < gameBoard.top.length; i++) {
//       if (gameBoard.top[i] === gameBoard.middle[i] && gameBoard.middle[i] === gameBoard.bottom[i] && gameBoard.top[i] != 0) {
//         return console.log("WIN");
//       }
//     }
//     for(var i = 0; i < arrays.length; i++){
//       if(gameBoard[arrays[i]][0] === gameBoard[arrays[i]][1] && gameBoard[arrays[i]][1] === gameBoard[arrays[i]][2] && gameBoard[arrays[i]][0] !=0 ){
//         return console.log("WIN");
//       }
//     }
//     if( gameBoard.top[0] === gameBoard.middle[1] && gameBoard.middle[1] === gameBoard.bottom[2] && gameBoard.top[0] != 0){
//       return console.log("WIN");
//     }
//     else if( gameBoard.top[2] === gameBoard.middle[1] && gameBoard.middle[1] === gameBoard.bottom[0] && gameBoard.top[2] != 0){
//       return console.log("WIN");
//     }
// }