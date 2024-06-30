

let humanScore = 0;
let computerScore = 0;


function playGame() {
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
let runningScore = document.querySelector('.running-score');
let outputMessage = document.querySelector('.output-message');

  
  let humanChoice;


  let computerChoice;
  function getComputerChoice() {
  let randomNumber = Math.floor((Math.random()*3));
  

  switch (randomNumber) {
  case 0: computerChoice = 'Rock';
  break;
  case 1: computerChoice = 'Paper';
  break;
  case 2: computerChoice = 'Scissors';
  break;
  
  };
  
  
  computerChoice = computerChoice.toUpperCase();
  //cl to see how working
 console.log(computerChoice);
 
  return computerChoice;
  }

  
  rock.addEventListener("click", function(e) {humanChoice=e.target.value;
    getComputerChoice();
    console.log(humanChoice);
    playRound();
  
  });


  paper.addEventListener("click", function(e){humanChoice=e.target.value;
    getComputerChoice();
    console.log(humanChoice);
    playRound();
  });
 


  scissors.addEventListener("click", function(e){humanChoice=e.target.value;
    getComputerChoice();
    console.log(humanChoice);
    playRound();
  });

  
function playRound() {

   if (humanChoice == 'ROCK' && computerChoice == 'PAPER') {
    computerScore ++;
   
    outputMessage.innerText ="You lose - paper beats rock!";
   
   }
   else if (humanChoice == 'ROCK' && computerChoice == 'SCISSORS')
    {humanScore ++;
outputMessage.innerText ="You win - rock beats scissors!";

 }

else if (humanChoice == 'PAPER' && computerChoice == 'ROCK') {
  computerScore ++;
 
 outputMessage.innerText ="You win - paper beats rock!";
  humanScore ++;
 
 }
 else if (humanChoice == 'PAPER' && computerChoice == 'SCISSORS')
  {
    outputMessage.innerText ="You lose - scissors beats paper!"; 
computerScore++;

}
else if (humanChoice == 'SCISSORS' && computerChoice == 'PAPER')
  {
    outputMessage.innerText ="You win - scissors beats paper!"; 
humanScore++;

}
else if (humanChoice == 'SCISSORS' && computerChoice == 'ROCK')
  {
    outputMessage.innerText ="You lose - rock beats scissors!"; 
computerScore++;

}
else if (humanChoice == computerChoice)
  {outputMessage.innerText ="You both picked the same! Its a draw!";
console.log(computerScore);
console.log(humanScore);
  
}
runningScore.innerText = `Running scores: Your score = ${humanScore}, Computer score = ${computerScore}`;
if (computerScore == 5) {runningScore.innerText = `Running scores: Your score = ${humanScore}, Computer score = ${computerScore}.  The computer wins!`;}
else if (humanScore == 5) {runningScore.innerText = `Running scores: Your score = ${humanScore}, Computer score = ${computerScore}.  You win!`;}
}
}



playGame();


