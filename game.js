function computerPlay(){
    let array = ["rock", "paper", "scissor"];
    let num = Math.ceil(Math.random() * 3);
    return array[num - 1];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "Try again!";
    }
    else if (playerSelection === "rock" && computerSelection ==="paper"){
        return "Computer wins!"
    }
    else if (playerSelection === "rock" && computerSelection ==="scissor"){
        return "You win!"
    }
    else if (playerSelection === "paper" && computerSelection ==="scissor"){
        return "Computer wins!"
    }
    else if (playerSelection === "paper" && computerSelection ==="rock"){
        return "You win!"
    }
    else if (playerSelection === "scissor" && computerSelection ==="paper"){
        return "You win!"
    }
    else if (playerSelection === "scissor" && computerSelection ==="rock"){
        return "Computer wins!"
    }
}  

  function game(){
      for (i=0; i<5; i++) {
        let playerSelection = prompt("Please choose: rock / paper / scissor!");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = computerPlay();
        let message = (playRound(playerSelection, computerSelection));
        console.log(message);
        alert (message);
      }
    return "End of game";
  }