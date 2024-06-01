


function getComputerChoice() {
let randomNumber = Math.floor((Math.random()*4));
//what to do if 0 is generated?
//console.log(randomNumber);
//switch (randomNumber) {
  //  case 1: console.log('Rock');
    //break;
    //case 2: console.log('Paper');
//break;
//case 3: console.log('Scissors');
//break;

//};
let computerChoice;
switch (randomNumber) {
case 1: computerChoice = 'Rock';
break;
case 2: computerChoice = 'Paper';
break;
case 3: computerChoice = 'Scissors';
break;

};



computerChoice = computerChoice.toUpperCase();
console.log(computerChoice);
}

computerChoice = getComputerChoice();

function getHumanChoice() {
    let humanChoice =  prompt ('Enter Rock, Paper or Scissors');
    //Better way of string comparison?
    humanChoice = humanChoice.toUpperCase();
    console.log(humanChoice);

}
getHumanChoice();
//let humanChoice = getHumanChoice();


let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
   if (humanChoice == 'ŔOCK' && computerChoice == 'PAPER') {
    computerScore += 1;
    console.log('You lose - paper beats rock!');
   }
   else if (humanChoice == 'ROCK' && computerChoice == 'SCISSORS')
    humanScore += 1;
console.log('You win - rock beats scissors!');
        
}

//logged for testing
console.log(humanScore);
console.log(computerScore);