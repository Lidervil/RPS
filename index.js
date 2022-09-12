function getComputerChoice() {
   let cChoice = Math.floor(Math.random() * 3);
    switch (cChoice) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
    } 
} 

function playRound() {
    let playerChoice = prompt('Insert your choice ');
    let getPlayerChoice = playerChoice.toLowerCase();
    let getCpuChoice = getComputerChoice();
    if (getPlayerChoice == getCpuChoice){
        console.log("It's a tie!") 
    } else if (getPlayerChoice=='rock' && getCpuChoice=='scissors' || getPlayerChoice=='paper' && getCpuChoice=='rock' || getPlayerChoice=='scissors' && getCpuChoice=='paper' ) {
        scoreP++;
        console.log(`You win ${getPlayerChoice} beats ${getCpuChoice}.`) 
    } else {
        scoreCPU++;
        console.log(`You lose ${getCpuChoice} beats ${getPlayerChoice}.`) 
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (scoreP == scoreCPU) {
        alert("It's a tie!");
    } else if (scoreP > scoreCPU) {
        alert("You win :D")
    } else {
        alert('You lose!!!!!!') 
    }
}

var scoreP = 0;
var scoreCPU = 0;

console.log(game());