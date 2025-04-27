// console.log("hi");

function getComputerChoice(){
    let randomNumber = Math.random();
    let computerChoice;
    if (randomNumber <= 0.33){
        computerChoice = "rock";
    }
    else if (randomNumber > 0.33 && randomNumber <= 0.66){
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("rock, paper, scissors?");
    return humanChoice.toLocaleLowerCase();
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
 if (humanChoice == computerChoice){
    return "draw"
 }
 else if ((humanChoice == "rock" && computerChoice == "scissors")||(humanChoice == "paper" && computerChoice == "rock")||(humanChoice == "scissors" && computerChoice == "paper")){
    humanScore++
    return `You win! ${humanChoice} beats ${computerChoice}`
 }
else {
    computerScore++
    return `You lose. ${computerChoice} beats ${humanChoice}`
}