var boardDisplay = document.querySelector('.board-display');
var player1Wins = document.getElementById('player-1-wins');
var player2Wins = document.getElementById('player-2-wins');
var turnBox = document.getElementById('display-turn');
var player1Token = document.getElementById('player-1-token');
var player2Token = document.getElementById('player-2-token');



window.addEventListener('load', showBoard)
window.addEventListener('load', function(e){
displayTurn(undefined)
updatePlayers()
});
boardDisplay.addEventListener('click', function(e){
    if(!gameOver){
        playerMove(e);
    }
});


var gameBoard = ['','','','','','','','',''];

var player1 = createPlayer(1,'🟥');
var player2 = createPlayer(2,'🔵');
var currentPlayer = player1;
var startingPlayer = player1;
var gameOver = false;


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
            return true;
        }
    }
    
    for (var i = 0; i< gameBoard.length; i++){
        if(gameBoard[i] === gameBoard[i+3] && gameBoard[i] === gameBoard[i+6] && gameBoard[i] !== ''){
            return true;
        }
    }

    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== ''){
        return true;
    }
    else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== ''){
        return true;
    }
}



function showBoard(){
    boardDisplay.innerHTML = "";
    for(var i = 0; i < gameBoard.length ; i ++){
        boardDisplay.innerHTML += `
        <section class="mini-grid" id=${i}>
            <p class="game-board-icon">${gameBoard[i]}</p>
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
        return;
    }
    showBoard();
    if(checkWin()){
        currentPlayer.wins += 1;
        gameOver = true;
        displayTurn('win');
        setTimeout(resetBoard, 3000);
        updatePlayers();
        return;
    }
    else if(checkDraw()){
        displayTurn('draw');
        gameOver = true;
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
    gameOver = false;
    startingPlayer = (startingPlayer === player1) ? player2: player1;
    currentPlayer = startingPlayer;
    displayTurn();
    showBoard();
}

function checkDraw(){
    if(gameBoard.includes('')){
        return false;
    }
    else{
        return true;
    }
}

function displayTurn(condition){
    if(condition === 'draw'){
        turnBox.innerText = `It's a Draw!`;
    }
    else if (condition === 'win'){
        turnBox.innerText = `${currentPlayer.token} wins!!`
    }

    else if (condition === undefined){
        turnBox.innerText = `It's ${currentPlayer.token} turn`
    }    
}

function updatePlayers(){
    player1Token.innerText = `${player1.token}`;
    player2Token.innerText = `${player2.token}`;
    player1Wins.innerText = `${player1.wins} wins`
    player2Wins.innerText = `${player2.wins} wins`
}

