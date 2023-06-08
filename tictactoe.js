var boardDisplay = document.querySelector('.board-display');


window.addEventListener('load', showBoard);

var gameBoard = 
[0,'','',
0,1,'',
'','',''];




function checkWin() {
    for (var i = 0; i < gameBoard.length; i+=3){
        if(gameBoard[i] === gameBoard[i+1] && gameBoard[i+2] === gameBoard[i] && gameboard[i+2] != ''){
        return console.log("WIN");
        }
    }
    
    for (var i = 0; i< gameBoard.length; i++){
        if(gameBoard[i] === gameBoard[i+3] && gameBoard[i] === gameBoard[i+6] && gameboard[i] !== ''){
            return console.log("WIN");
        }
    }

    if (gameBoard.top[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== ''){
        return console.log("WIN");
    }
    else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== ''){
        return console.log("WIN");
    }
}



function showBoard(){
    console.log("test")
    boardDisplay.innerHTML = "";
    for(var i = 0; i < gameBoard.length ; i ++){
        boardDisplay.innerHTML += `
        <section class="mini-grid" id=${i}>
            <p>${gameBoard[i]}</p>
        </section>
        `
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