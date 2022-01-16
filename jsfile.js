function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * options.length);
    return (options[random]);
}

function playRound(playerSelection) {
    let playerSelection = playerSelection.toLowerCase();
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