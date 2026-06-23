console.log('Hello world');


function getComputerChoice() {
  let randomValue= Math.random();
  let computerChoice = '';
  if(randomValue >=0 && randomValue < 1/3) {
    computerChoice = '石头';
  } else if (randomValue >= 1/3 && randomValue < 2/3){
    computerChoice = '剪刀';
  } else if (randomValue >= 2/3 && randomValue < 1){
    computerChoice = '布';
  }
  return computerChoice;
}

function getHumanChoice(){
  let humanChoice = prompt('请输入石头、剪刀、布');
  return humanChoice;
}


function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    let playRoundResult = '';
    if(humanChoice === '石头') {
      if(computerChoice === '剪刀') {
        playRoundResult = '石头比剪刀，你赢了！';
        humanScore ++;
      }else if(computerChoice === '布'){
        playRoundResult = '石头比布，你输了！';
        computerScore++;
      } else if(computerChoice === '石头'){
        playRoundResult = '石头比石头，平局！';
      }
    } else if(humanChoice === '剪刀') {
      if(computerChoice === '剪刀') {
        playRoundResult = '剪刀比剪刀，平局！';
      }else if(computerChoice === '布'){
        playRoundResult = '剪刀比布，你赢了！';
        humanScore ++;
      } else if(computerChoice === '石头'){
        playRoundResult = '剪刀比石头，你输了！';
        computerScore++;
      }
    } else if(humanChoice === '布'){
      if(computerChoice === '剪刀') {
        playRoundResult = '布比剪刀，你输了！';
        computerScore++;
      }else if(computerChoice === '布'){
        playRoundResult = '布比布，平局！';
      } else if(computerChoice === '石头'){
        playRoundResult = '布比石头，你赢了！';
        humanScore ++;
      }
    }
    console.log(playRoundResult);
  }
  for(let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    playRound(humanChoice, computerChoice);
  }
  let gameResult = '';
  if(humanScore > computerScore){
    gameResult = `${humanScore}:${computerScore}，获胜者是玩家!`;
  }else if (humanScore < computerScore){
    gameResult = `${humanScore}:${computerScore}，获胜者是电脑!`;
  }else if(humanScore === computerScore){
    gameResult = `${humanScore}:${computerScore}，平局!`;
  }
  console.log(gameResult);
}
