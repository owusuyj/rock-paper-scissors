const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const playerScoreText = document.querySelector("#playerScoreText")
const computerScoreText = document.querySelector("#computerScoreText")
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player, computer, result; 
let playerScore = 0, computerScore = 0;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    playerScoreText.textContent = `Player Score: ${playerScore}`
    computerScoreText.textContent = `Computer Score: ${computerScore}`
    if (playerScore == 5 || computerScore == 5){console.log("check"); resultText.textContent = "Game Over!"}
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner(){
    if (player === computer){
        return "Draw!"
    }
    else if (computer == "ROCK"){
        if (player == "PAPER"){playerScore += 1; return "You Win!"}
        else{computerScore += 1; return "You Lose!"} 
    }
    else if (computer == "PAPER"){
        if (player == "SCISSORS"){playerScore += 1; return "You Win!"}
        else{computerScore += 1; return "You Lose!"}
    }
    else if (computer == "SCISSORS"){
        if (player == "ROCK"){playerScore += 1; return "You Win!"}
        else{computerScore += 1; return "You Lose!"}
    }
}
