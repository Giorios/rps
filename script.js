var userScore = 0, computerScore = 0;

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors' ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    console.log('error!');
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
    return 'Computer won!';
      computerScore++;
  } else {
    return 'You won!';
      userScore++;
  }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors'){
      return 'Computer won!';
      computerScore++;
    } else {
      return 'You won!';
      userScore++;
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'You won!';
      
    }
  }
  if (userChoice === 'bomb'){
    return 'you win!';
    userScore++;
  }
};

function displayWinner(winner)
{
 document.getElementById("output").innerHTML = winner;
};

function updateScore()
  {
     document.getElementById("yw").innerHTML = userScore; 
    document.getElementById("cw").innerHTML = computerScore;
  };

const playGame = (choice) => {
  var userChoice = getUserChoice(choice);
  var computerChoice = getComputerChoice();
  console.log('picked: ' + userChoice);
  console.log('computer picked: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  displayWinner(determineWinner(userChoice, computerChoice));
  updateScore(userScore, computerScore)
   document.getElementById("cc").innerHTML = computerChoice;
};


