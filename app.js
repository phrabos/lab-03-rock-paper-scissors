// import functions and grab DOM elements
import makeRockPaperScissors from "./utils.js";
const submitButton = document.getElementById("submit-button")
const resetButton = document.getElementById("reset-button")
// const resultsDiv = document.getElementById("results-div")
const userPickSpan = document.getElementById("user-pick")
const computerPickSpan = document.getElementById("computer-pick")
const winLoseSpan = document.getElementById("win-lose-span")
const numResets = document.getElementById("num-resets")
const winSpan = document.getElementById("win-span")
const lossSpan = document.getElementById("loss-span")
const tieSpan = document.getElementById("tie-span")

// initialize state
let resets = 0;
let wins = 0;
let losses = 0;
let ties = 0;
// set global variable
let computerRandom = 0;
let computerPick = '';

// set event listeners to update state and DOM
submitButton.addEventListener("click", () =>{
    computerRandom = Math.floor(Math.random()*3)
    computerPick = makeRockPaperScissors(computerRandom)
    const userPick = document.querySelector("input[type=radio]:checked").value;

    if(userPick === computerPick){
        ties++
        winLoseSpan.textContent = 'tie'
        userPickSpan.textContent = userPick
        computerPickSpan.textContent = computerPick
        tieSpan.textContent = ties;
        return
    } else if (userPick === 'rock'){userRock()}
      else if (userPick === 'paper'){userPaper()}
      else  userScissors()
});

resetButton.addEventListener("click", () =>{
    resets++
    numResets.textContent = resets
    wins = 0;
    losses = 0;
    ties = 0;
    winSpan.textContent = wins;
    tieSpan.textContent = ties;
    lossSpan.textContent = losses
})

function userRock(){
    if (computerPick === 'paper'){
        losses++
        winLoseSpan.textContent = 'lose'
        userPickSpan.textContent = 'rock'
        computerPickSpan.textContent = 'paper'
        lossSpan.textContent = losses
        
    } else {
        wins++
        winLoseSpan.textContent = 'win'
        userPickSpan.textContent = 'rock'
        computerPickSpan.textContent = 'scissors'
        winSpan.textContent = wins;
    }
    }
function userPaper(){
    if (computerPick === 'scissors'){
        losses++
        winLoseSpan.textContent = 'lose'
        userPickSpan.textContent = 'paper'
        computerPickSpan.textContent = 'scissors'
        lossSpan.textContent = losses
        
    } else {
        wins++
        winLoseSpan.textContent = 'win'
        userPickSpan.textContent = 'paper'
        computerPickSpan.textContent = 'rock'
        winSpan.textContent = wins;
    }
    }
function userScissors(){
    if (computerPick === 'rock'){
        losses++
        winLoseSpan.textContent = 'lose'
        userPickSpan.textContent = 'scissors'
        computerPickSpan.textContent = 'rock'
        lossSpan.textContent = losses
        
    } else {
        wins++
        winLoseSpan.textContent = 'win'
        userPickSpan.textContent = 'scissors'
        computerPickSpan.textContent = 'paper'
        winSpan.textContent = wins;
    }
    }    

// } else if (userPick === 'rock' && computerPick === 'paper'){
//     console.log('you loser')
// } else if (userPick === 'rock' && computerPick === 'scissors'){
//     console.log('you win')
// } else if (userPick === 'paper' && computerPick === 'scissors'){
//     console.log('you loser')
// } else if (userPick === 'paper' && computerPick === 'rock'){
//     console.log('you win')
// } else if (userPick === 'scissors' && computerPick === 'rock'){
//     console.log('you loser')
// } else if (userPick === 'scissors' && computerPick === 'paper'){
//     console.log('you win')
// }