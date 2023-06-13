function getComputerChoice(){
    let ran = Math.floor(Math.random() * 3);
    if (ran == 0){return "ROCK"}
    else if (ran == 1){return "PAPER"}
    else {return "SCISSORS"}
}

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

// console.log(playRound(getUserChoice(), getComputerChoice()));

// function game(){
//     let win = 0;
//     let loss = 0;
//     for (let i = 0; i < 5; i++){
//         if (playRound().substring(0, 6) === "You L"){
//             loss++
//             console.log("loss")
//         }
//         else {
//             wins++
//             console.log("win")
//         }
//     }
//     if (wins > loss){
//         console.log("You won the Game!")
//     }
//     else {
//         console.log("You lost the Game!")
//     }
// }


const result = document.querySelector('.results')
const ans = document.createElement('p')


const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', playGame));

// console.log(playRound(`${check}`, getComputerChoice))));



function playGame(){
    let ok = playRound(`${check}`, getComputerChoice())
    console.log(ok)
    console.log(`${check}`)
}

function check(e){
    return this.classList.value
}

result.appendChild(ans);