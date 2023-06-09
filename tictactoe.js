var boardDisplay = document.querySelector('.board-display');
var player1Box = document.getElementById('player-1-wins');
var player2Box = document.getElementById('player-2-wins');
var turnBox = document.getElementById('display-turn');

window.addEventListener('load', showBoard)
window.addEventListener('load', function(e){
displayTurn(undefined)
});
boardDisplay.addEventListener('click', function(e){
    playerMove(e)
});


var gameBoard = 
['','','',
'','','',
'','',''];

var player1 = createPlayer(1,'😡');
var player2 = createPlayer(2,'😂');
var currentPlayer = player1;
var startingPlayer = player1;


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
            currentPlayer.wins += 1;
            return true;
        }
    }
    
    for (var i = 0; i< gameBoard.length; i++){
        if(gameBoard[i] === gameBoard[i+3] && gameBoard[i] === gameBoard[i+6] && gameBoard[i] !== ''){
            currentPlayer.wins += 1;
            return true;
        }
    }

    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== ''){
        currentPlayer.wins += 1;
        return true;
    }
    else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== ''){
        currentPlayer.wins += 1;
        return true;
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
    currentPlayer = (currentPlayer === player1) ? player2 : player1;
}

function playerMove(e){
    var chosenIndex = parseInt(e.target.closest('section').id);
    if(gameBoard[chosenIndex] === ''){
        gameBoard[chosenIndex] = currentPlayer.token;
    }
    else{
        return console.log("INVALID SPOT");
    }
    showBoard();
    if(checkWin()){
        displayTurn('win');
        setTimeout(resetBoard, 3000);
        updateWin();
        return;
    }
    else if(checkDraw()){
        displayTurn('draw');
        setTimeout(resetBoard, 3000);
        return;
    }
    playerSwap();
    displayTurn();
    
}

function resetBoard(){
    for (var i = 0; i < gameBoard.length ; i++){
        gameBoard[i] = '';
    }
    showBoard();
}

function checkDraw(){
    if(gameBoard.includes('')){
        return false;
    }
    else{
        console.log("DRAW");
        return true;
    }
}

function displayTurn(condition){
    if(condition === 'draw'){
        console.log("DRAW1")
        turnBox.innerText = `It's a Draw!`;
    }
    else if (condition === 'win'){
        console.log("WIN")
        turnBox.innerText = `${currentPlayer.token} wins!!`
    }

    else if (condition === undefined){
        turnBox.innerText = `It's ${currentPlayer.token} turn`
    }    
}

function updateWin(){
    player1Box.innerText = `${player1.wins} wins`
    player2Box.innerText = `${player2.wins} wins`
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