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
    let result = document.querySelector("#result");
    let resultMessage = "";

 if (humanChoice == computerChoice){
    console.log("draw") 
    resultMessage += "draw";
 }
 else if ((humanChoice == "rock" && computerChoice == "scissors")||(humanChoice == "paper" && computerChoice == "rock")||(humanChoice == "scissors" && computerChoice == "paper")){
    humanScore++
    console.log(`You win! ${humanChoice} beats ${computerChoice}`) 
    resultMessage += `You win! ${humanChoice} beats ${computerChoice}`;
    }
else {
    computerScore++
    console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
    resultMessage += `You lose. ${computerChoice} beats ${humanChoice}`;
}
resultMessage +=`<br>Score - You: ${humanScore},  Computer: ${computerScore}`;
if (humanScore === 5 || computerScore === 5){
    let winner = humanScore === 5 ? "You win the game" : "Computer wins the game";
    resultMessage += `<br><strong>Game Over: ${winner}</strong>`;

    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}
result.innerHTML = resultMessage;
}

let humanScore = 0;
let computerScore = 0;


// function playGame(){
//     for (let i = 1; i <= 5; i++) {
//         playRound(getHumanChoice(),getComputerChoice())
//         console.log(`Round ${i} human:${humanScore}  computer:${computerScore}`)
//       }
// }

let rockButton = document.querySelector('#rock');
rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()) );

let paperButton = document.querySelector('#paper');
paperButton.addEventListener("click",() => playRound("paper", getComputerChoice()) );

let scissorButton = document.querySelector('#scissors');
scissorButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));


