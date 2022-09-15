function getComputerChoice() {
   let cChoice = Math.floor(Math.random() * 3);
    switch (cChoice) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
    } 
} 

function playRound(getPlayerChoice) {
    let getCpuChoice = getComputerChoice();
    if (getPlayerChoice == getCpuChoice){
        document.getElementById('roleplay').innerHTML = ("It's a tie!") 
    } else if (getPlayerChoice=='rock' && getCpuChoice=='scissors' || getPlayerChoice=='paper' && getCpuChoice=='rock' || getPlayerChoice=='scissors' && getCpuChoice=='paper' ) {
        scoreP++;
        document.getElementById('roleplay').innerHTML = (`You win ${getPlayerChoice} beats ${getCpuChoice}.`) 
    } else {
        scoreCPU++;
        document.getElementById('roleplay').innerHTML = (`You lose ${getCpuChoice} beats ${getPlayerChoice}.`) 
    }
    game()
}

function game() {
    document.querySelector('#scoreP').innerHTML = scoreP;
    document.querySelector('#scoreCPU').innerHTML = scoreCPU;
    if (scoreP == 5) {
        
        scoreP = 0;
        scoreCPU = 0;
        alert("You win :D");
    } else if (scoreCPU == 5) {
        alert('You lose!!!!!!');
        scoreP = 0;
        scoreCPU = 0;
    } 
}

var scoreP = 0;
var scoreCPU = 0;

const buttons = document.querySelectorAll('[data-selection]')
buttons.forEach(buttons => {
    buttons.addEventListener('click', e => {
        const playerChoice = buttons.dataset.selection
        playRound(playerChoice);
    })
})

function runGame(playerChoice) {
    console.log(playerChoice)
}