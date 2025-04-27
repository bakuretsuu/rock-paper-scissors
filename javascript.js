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




function playRound(humanChoice, computerChoice){
 if (humanChoice == computerChoice){
    console.log("draw") 
 }
 else if ((humanChoice == "rock" && computerChoice == "scissors")||(humanChoice == "paper" && computerChoice == "rock")||(humanChoice == "scissors" && computerChoice == "paper")){
    humanScore++
    console.log(`You win! ${humanChoice} beats ${computerChoice}`) 
    }
else {
    computerScore++
    console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
}
}

let humanScore = 0;
let computerScore = 0;
function playGame(){
  

    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(),getComputerChoice())
        console.log(`Round ${i} human:${humanScore}  computer:${computerScore}`)
      }





}