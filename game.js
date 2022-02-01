let computerPoints = 0;
let playerPoints = 0;

//random number calculator for computer choice
function computerPlay(){
    let array = ["rock", "paper", "scissor"];
    let num = Math.ceil(Math.random() * 3);
    return array[num - 1];
}
//function to play one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "It's a tie!";
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


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    let message = (playRound(playerSelection, computerSelection));
    if (message === 'Computer wins!'){
        computerPoints += 1;
    } else if (message === "You win!"){
        playerPoints += 1;
    }
    const container = document.querySelector('#result');
    const counterText = document.getElementById("counter")
    counterText.innerHTML = ('Computer points: ' + computerPoints + '<br/> Player points: ' + playerPoints);
    container.innerHTML = ('In this round <br/> Your choice was: ' + playerSelection + '<br/> Computer choice was: ' + computerSelection + '<br/>' + message);
    
    const body = document.querySelector('body');
    const resetMSG = document.createElement('div')
    if (computerPoints === 5 || playerPoints === 5){
        if (computerPoints > playerPoints){
            resetMSG.innerHTML = ('Computer wins this game. <br/>For a new game reload page');
            resetMSG.style.color="red";
        } else {
            resetMSG.innerHTML = ('You won this game. <br/>For a new game reload page');
            resetMSG.style.color="green";
        }
        body.appendChild(resetMSG)
        var div = document.getElementById("buttons");
        div.remove();
    }
  });
});
