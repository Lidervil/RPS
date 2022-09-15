function getComputerChoice() {
   let cChoice = Math.floor(Math.random() * 3);
    switch (cChoice) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
    } 
} 

function playRound() {
    getPlayerChoice = getPlayerChoice.toLowerCase();
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
    
    if (scoreP == 5) {
        alert("You win :D");
        scoreP == 0;
        scoreCPU == 0;
    } else if (scoreCPU == 5) {
        alert('You lose!!!!!!');
        scoreP == 0;
        scoreCPU == 0;
    } 
}




var scoreP = 0;
var scoreCPU = 0;

var getPlayerChoice;

let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')


rock.addEventListener('click', rocki());
paper.addEventListener('click', paperi());
scissors.addEventListener('click', scissorsi());

function rocki() {
    getPlayerChoice = "rock";
    playRound();
    game();
}
function paperi() {
    getPlayerChoice = "paper";
    playRound();
    game();
}
function scissorsi() {
    getPlayerChoice = "scissors";
    playRound();
    game();
}


/* console.log(game()); */