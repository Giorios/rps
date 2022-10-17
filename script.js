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
    return 'tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
    return 'computer wins!';
  } else {
    return 'you win!';
  }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors'){
      return 'computer wins!';
    } else {
      return 'you win!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'computer wins!';
    } else {
      return 'you win!';
    }
  }
  if (userChoice === 'bomb'){
    return 'you win!';
  }
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice('');
  console.log('picked: ' + userChoice);
  console.log('computer picked: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();