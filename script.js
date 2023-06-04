function getComputerChoice(){
    let ran = Math.floor(Math.random() * 3);
    if (ran == 0){return "ROCK"}
    else if (ran == 1){return "PAPER"}
    else {return "SCISSORS"}
}

console.log(getComputerChoice());


function playRound(playerChoice, cpuChoice)
{
    let playerChosen = playerChoice.toUpperCase();
    if (cpuChoice === playerChosen){
        return "Tie! Play Again"
    }

    else if (cpuChoice === "ROCK" && playerChosen == "PAPER"){
        return "You Win! Paper beats Rock" 
    }
}

console.log(playRound("paper", getComputerChoice()));