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
    let winner;
    let loser;

    switch (playerSelectionLowercase){
        case "rock":
            if (computerSelectionLowerCase == "paper"){
                winOrLose = "lose";
                winner = "Paper";
                loser = "Rock";
            }else if(computerSelectionLowerCase == "scissors"){
                winOrLose = "win";
                winner = "Rock";
                loser = "Scissors";
            }else {
                isDraw = true;
                endGameMessage = "Draw!";
                return endGameMessage;
            }
            break;

        case "paper":
            if (computerSelectionLowerCase == "scissors"){
                winOrLose = "lose";
                winner = "Scissors";
                loser = "Paper";
            }else if(computerSelectionLowerCase == "rock"){
                winOrLose = "win";
                winner = "Paper";
                loser = "Rock";
            }else {
                isDraw = true;
                endGameMessage = "Draw!";
                return endGameMessage;
            }
            break;

        case "scissors":
            if (computerSelectionLowerCase == "rock"){
                winOrLose = "lose";
                winner = "Rock";
                loser = "Scissors";
            }else if(computerSelectionLowerCase == "paper"){
                winOrLose = "win";
                winner = "Scissors";
                loser = "Paper";
            }else {
                isDraw = true;
                endGameMessage = "Draw!";
                return endGameMessage;
            }
            break;
        default:
            endGameMessage = "Please input Rock, Paper or Scissors!";
            return endGameMessage;
    }

    endGameMessage = `You ${winOrLose}! ${winner} beats ${loser}`;
    return endGameMessage;
}

const playerSelection = prompt();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));