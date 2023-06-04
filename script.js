function getComputerChoice(){
    let ran = Math.floor(Math.random() * 3);
    if (ran == 0){return "ROCK"}
    else if (ran == 1){return "PAPER"}
    else {return "SCISSORS"}
}
function getUserChoice(){
    let ans = window.prompt("Chose a stance");
    return ans;
}

console.log(getComputerChoice());
console.log(getUserChoice());

function playRound(playerChoice, cpuChoice)
{
    playerChoice = playerChoice.toUpperCase();
    if (cpuChoice === playerChoice){
        return "Tie! Play Again"
    }

    else if (cpuChoice === "ROCK" && playerChoice == "PAPER"){
        return "You Win! Paper beats Rock" 
    }

    else if (cpuChoice === "PAPER" && playerChoice == "ROCK"){
        return "You Lose! Paper beats Rock"
    }

    else if (cpuChoice === "ROCK" && playerChoice == "SCISSORS"){
        return "You Lose! Rock beats Scissors"
    }

    else if (cpuChoice === "PAPER" && playerChoice == "SCISSORS"){
        return "You Win! Scissors beats Paper"
    }

    else if (cpuChoice === "SCISSORS" && playerChoice == "ROCK"){
        return "You Win! Rock beats Scissors"
    }
    else if (cpuChoice === "SCISSORS" && playerChoice == "PAPER") {
        return "You Lose! Scissors beats Paper"
    }
}

console.log(playRound(getUserChoice(), getComputerChoice()));

function game(){
    for (let i = 0; i < 5; i++){
        playRound();
    }
}
