// import functions and grab DOM elements
import {  didUserWin, randomComputerPick  }  from "./get-random-throw.js";
const submitButton = document.getElementById("submit-button")
const resetButton = document.getElementById("reset-button")
const userPickSpan = document.getElementById("user-pick")
const computerPickSpan = document.getElementById("computer-pick")
const winLoseSpan = document.getElementById("win-lose-span")
const numResets = document.getElementById("num-resets")
const winSpan = document.getElementById("win-span")
const lossSpan = document.getElementById("loss-span")
const tieSpan = document.getElementById("tie-span")
// initialize state
let wins = 0;
let losses = 0;
let ties = 0;
let resets = 0;
// set event listeners to update state and DOM
submitButton.addEventListener("click", () =>{
    const userPick = document.querySelector("input[type=radio]:checked").value;
    const computerPick = randomComputerPick();

    if (didUserWin(userPick, computerPick) === 'win'){win()}
    else if (didUserWin(userPick, computerPick) === 'lose'){loss()}
    else tie();

    computerPickSpan.textContent = computerPick;
    userPickSpan.textContent = userPick
});

resetButton.addEventListener("click", () =>{
    resetGame();
})

function tie(){
    ties++
    winLoseSpan.textContent = 'tie'
    tieSpan.textContent = ties;
}
function win(){
    wins++
    winLoseSpan.textContent = 'win'
    winSpan.textContent = wins;
}
function loss(){
    losses++
    winLoseSpan.textContent = 'lose'
    lossSpan.textContent = losses
}
function resetGame() {
    resets++;
    numResets.textContent = resets;
    wins = 0;
    losses = 0;
    ties = 0;
    winSpan.textContent = wins;
    tieSpan.textContent = ties;
    lossSpan.textContent = losses;
}

    


