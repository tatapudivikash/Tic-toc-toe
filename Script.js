const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let gameActive = true;
let board = ["","","","","","","","",""];

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach((cell,index)=>{
    cell.addEventListener("click",()=>cellClick(index));
});

function cellClick(index){
    if(board[index]!=="" || !gameActive) return;

    board[index]=currentPlayer;
    cells[index].textContent=currentPlayer;

    checkWinner();

    if(gameActive){
        currentPlayer=currentPlayer==="X"?"O":"X";
        statusText.textContent=`Player ${currentPlayer}'s Turn`;
    }
}

function checkWinner(){
    for(let condition of winConditions){
        const [a,b,c]=condition;

        if(board[a] &&
           board[a]===board[b] &&
           board[b]===board[c]){
            statusText.textContent=`Player ${currentPlayer} Wins!`;
            gameActive=false;
            return;
        }
    }

    if(!board.includes("")){
        statusText.textContent="It's a Draw!";
        gameActive=false;
    }
}

function restartGame(){
    board=["","","","","","","","",""];
    currentPlayer="X";
    gameActive=true;
    statusText.textContent="Player X's Turn";

    cells.forEach(cell=>{
        cell.textContent="";
    });
}
