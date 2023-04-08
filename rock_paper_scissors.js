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
let currentComputerChoice = getComputerChoice();
console.log(currentComputerChoice);