function getComputerChoice(){
    let computerChoice;
    let randomNumber;
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

let amountWins = 0;
let amountLosses = 0;
let standing;

function playRound(playerSelection){
    let endRoundMessage;
    let playerSelectionLowercase = playerSelection.toLowerCase();
    let computerSelectionLowerCase = getComputerChoice().toLowerCase();
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
                endRoundMessage = "Draw!";
                result.textContent = endRoundMessage;
                return;
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
                endRoundMessage = "Draw!";
                result.textContent = endRoundMessage;
                return;
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
                endRoundMessage = "Draw!";
                result.textContent = endRoundMessage;
                return;
            }
            break;
        default:
            endRoundMessage = "Please input Rock, Paper or Scissors!";
            result.textContent = endRoundMessage;
            return;
    }

    endRoundMessage = `You ${winOrLose}! ${winner} beats ${loser}`;
 
    let messageArray;
    let finalMessage;
    
        messageArray = endRoundMessage.split(" ");

        if (messageArray[1] == "win!"){
            amountWins++;
        }

        if (messageArray[1] == "lose!"){
            amountLosses++;
        }
        result.textContent = endRoundMessage;
        standing = `Current standing is ${amountWins.toString()} wins and ${amountLosses} losses!`;
        standingDiv.textContent = standing;
        
        let gamesPlayed;
        gamesPlayed = amountWins + amountLosses;
        if (gamesPlayed == 5){
            if (amountWins > amountLosses){
                finalMessage = `You win ${amountWins} : ${amountLosses}!`;
            }else if (amountLosses > amountWins){
                finalMessage = `You lose ${amountWins} : ${amountLosses}!`
            }else{
                finalMessage = `It's a draw! ${amountWins} : ${amountLosses}`
            }

            result.textContent = finalMessage;
            amountLosses = 0;
            amountWins = 0;
        }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.innerText.toString());
    });
});

const result = document.querySelector('#result');
const standingDiv = document.querySelector('#standing');