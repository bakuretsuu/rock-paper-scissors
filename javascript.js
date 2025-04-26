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
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;