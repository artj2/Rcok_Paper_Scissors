function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * options.length);
    return (options[random]);
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        return "Draw";
    }
    if (playerSelection == "rock") {
        if (computerSelection == "scissors"){
            return "You Win! Rock beats Scissors";
        }
        else {
            return "You Lose! Paper beats Rock";
        }
    }
    if (computerSelection == "rock") {
        if (playerSelection == "scissors") {
            return "You Lose! Rock beats Scissors";
        }
        else {
            return "You Win! Paper beats Rock";
        }
    }
}
function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let result;
    let roundResult;
    for(let i = 0; i < 6; i++) {
        let playerChoice = prompt("Choose between Rock, Paper, and Scissors");
        playRound(playerChoice);
        roundResult = playRound(playerChoice);
        if(roundResult.startsWith("You Win")) {
            playerPoints++;
        }
        else if(roundResult.startsWith("You Lose")) {
            computerPoints++;
        }
        alert(roundResult);
    }
    if(playerPoints > computerPoints) {
        result = "You won the Game!";
    }
    else if(computerPoints > playerPoints) {
        result = "You lost the Game!";
    }
    else {
        result = "It was a Draw!";
    }
    alert(result);
    return result;
}