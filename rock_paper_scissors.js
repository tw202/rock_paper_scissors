function getComputerChoice(){
    let computerChoice;
    let randomNumber;
    let isDraw;
    randomNumber = Math.floor(Math.random() * 3) + 1;

    switch(randomNumber){
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    let endGameMessage;
    let playerSelectionLowercase = playerSelection.toLowerCase();
    let computerSelectionLowerCase = computerSelection.toLowerCase();
    let winOrLose;
    switch (playerSelectionLowercase){
        case "rock":
            if (computerSelectionLowerCase == "paper"){
                winOrLose = "lose";
            }else if(computerSelectionLowerCase == "scissors"){
                winOrLose = "win";
            }else {
                isDraw = true;
            }
            break;
        case "paper":
            break;
        case "scissors":
            break;
    }

    endGameMessage = `You ${winOrLose}! ${winner} beats ${loser}`;
    return endGameMessage;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));