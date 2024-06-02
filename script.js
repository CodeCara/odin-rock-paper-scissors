//let computerChoice;
//function getComputerChoice() {
//let randomNumber = Math.floor((Math.random()*3));


//other commented out code is correct, but trying in diff place
//what to do if 0 is generated?



//switch (randomNumber) {
//case 0: computerChoice = 'Rock';
//break;
//case 1: computerChoice = 'Paper';
//break;
//case 2: computerChoice = 'Scissors';
//break;


//};


//computerChoice = computerChoice.toUpperCase();
//console.log(computerChoice);
//return computerChoice;
//}

//let humanChoice;

//computerChoice = getComputerChoice();


//function getHumanChoice() {
  //  humanChoice =  prompt ('Enter Rock, Paper or Scissors');
    //Better way of string comparison?
   // humanChoice = humanChoice.toUpperCase();
    //console.log(humanChoice);
  
//}

//getHumanChoice();

let humanScore = 0;
let computerScore = 0;


function playGame() {
for (let i=0; i<5; i++){

  let humanChoice;




function getHumanChoice() {
    humanChoice =  prompt ('Enter Rock, Paper or Scissors');
    //Better way of string comparison?
    humanChoice = humanChoice.toUpperCase();
    //console.log(humanChoice);
  
}

getHumanChoice();











  let computerChoice;
  function getComputerChoice() {
  let randomNumber = Math.floor((Math.random()*3));
  //what to do if 0 is generated?
  
  
  
  switch (randomNumber) {
  case 0: computerChoice = 'Rock';
  break;
  case 1: computerChoice = 'Paper';
  break;
  case 2: computerChoice = 'Scissors';
  break;
  
  
  };
  
  
  computerChoice = computerChoice.toUpperCase();
  //console.log(computerChoice);
  return computerChoice;
  }

  computerChoice = getComputerChoice();


  //let humanChoice;




//function getHumanChoice() {
 //   humanChoice =  prompt ('Enter Rock, Paper or Scissors');
    //Better way of string comparison?
   // humanChoice = humanChoice.toUpperCase();
    //console.log(humanChoice);
  
//}

//getHumanChoice();


//let humanScore = 0;
//let computerScore = 0;


function playRound() {
  //let humanScore = 0;
//let computerScore = 0;
 
   if (humanChoice == 'ROCK' && computerChoice == 'PAPER') {
    computerScore ++;
   // console.log(computerScore);
    console.log('You lose - paper beats rock!');
   }
   else if (humanChoice == 'ROCK' && computerChoice == 'SCISSORS')
    {humanScore ++;
console.log('You win - rock beats scissors!'); }
//put generic cond at end if the two are equal for a draw
else if (humanChoice == 'PAPER' && computerChoice == 'ROCK') {
  computerScore ++;
 // console.log(computerScore);
  console.log('You win - paper beats rock!');
  humanScore ++;
 }
 else if (humanChoice == 'PAPER' && computerChoice == 'SCISSORS')
  {
console.log('You lose - scissors beats paper!'); 
computerScore++;}
else if (humanChoice == 'SCISSORS' && computerChoice == 'PAPER')
  {
console.log('You win - scissors beats paper!'); 
humanScore++;}
else if (humanChoice == 'SCISSORS' && computerChoice == 'ROCK')
  {
console.log('You lose - rock beats scissors!'); 
computerScore++;}
else if (humanChoice == computerChoice)
  {console.log('You both picked the same! Its a draw!');

  
}

}
playRound();


}

if (humanScore > computerScore) {

  console.log('Congratulations, you beat the computer Odinite!');}

  else  {console.log('Sorry, the computer won this time.  Better luck next time Odinite!');}

}
//playGame();
playGame();
