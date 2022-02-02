//random number calculator for computer choice
function computerPlay(){
    let array = ["rock", "paper", "scissor"];
    let num = Math.ceil(Math.random() * 3);
    return array[num - 1];
}
//logic
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "It's a tie";
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissor') ||
        (computerSelection === 'scissor' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')){
        return "Computer"
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'scissor' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')){
        return "Player"
    }
}  

let computerPoints = 0;
let playerPoints = 0;
const buttonsDiv = document.getElementById("buttons");
const buttons = buttonsDiv.querySelectorAll('button');
const counterComputer = document.getElementById("numbercomputer")
const counterPlayer = document.getElementById("numberplayer")
//play round
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    let message = (playRound(playerSelection, computerSelection));
    if (message === 'Computer'){
        computerPoints += 1;
    } else if (message === "Player"){
        playerPoints += 1;
    }
//write pionts to board and anounce round result
    counterComputer.innerText = computerPoints; 
    counterPlayer.innerText =  playerPoints;
    document.getElementById("result").innerText = "This round goes to: " + message;
//check points status, and if someone reached 5 points anounce result with reset button  
    if (computerPoints === 5 || playerPoints === 5){
        if (computerPoints > playerPoints){
            resetButton.innerHTML = 'Computer wins this game!</br>Click here to start a new one.';
            resetButton.style.backgroundColor = "red";
            resetButton.style.display = "block";
        } else {
            resetButton.innerHTML = 'You won this game!</br>Click here to start a new one.';
            resetButton.style.backgroundColor= "green";
            resetButton.style.display = "block";
        }
        //remove game buttons
        buttonsDiv.style.display = "none";
    }
  });
});
//reset button script
const resetButton = document.getElementById("resbut");
resetButton.addEventListener('click', () => {
    location.reload();
});
