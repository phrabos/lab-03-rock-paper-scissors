// import functions and grab DOM elements
import {  makeRockPaperScissors  }  from "./utils.js";
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
export let outcomes = [0,0,0,0];
let wins = 0;
let losses = 0;
let ties = 0;
let resets = 0;
// set global variable

let computerPickString = '';
let computerRandom = 0;
// set event listeners to update state and DOM
submitButton.addEventListener("click", () =>{
    const userPick = document.querySelector("input[type=radio]:checked").value;

    didUserWin(userPick, computerPick());
});

resetButton.addEventListener("click", () =>{
    resetGame();
})

export function computerPick(){
    computerRandom = Math.floor(Math.random()*3)
    return computerPickString = makeRockPaperScissors(computerRandom)
}

export function resetGame() {
        resets++;
        numResets.textContent = resets;
        wins = 0;
        losses = 0;
        ties = 0;
        winSpan.textContent = wins;
        tieSpan.textContent = ties;
        lossSpan.textContent = losses;
    }    

function didUserWin (player, computer){
    if(player === computer){
        tie()
        computerPickSpan.textContent = computer
        userPickSpan.textContent = player
    } else if(player === "rock" && computer === 'scissors'){
        win()
        userPickSpan.textContent = player
        computerPickSpan.textContent = computer
        
    } else if(player === "rock" && computer === "paper"){
        loss()
        userPickSpan.textContent = player
        computerPickSpan.textContent = computer
    } else if(player === "paper" && computer === 'rock'){
        win()
        userPickSpan.textContent = player
        computerPickSpan.textContent = computer
    } else if(player === "paper" && computer === "scissors"){
        loss()
        userPickSpan.textContent = player
        computerPickSpan.textContent = computer
    } else if(player === "scissors" && computer === 'paper'){
        win()
        userPickSpan.textContent = player
        computerPickSpan.textContent = computer
    } else if(player === "scissors" && computer === "rock"){
        loss()
        userPickSpan.textContent = player
        computerPickSpan.textContent = computer
    } 
}
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

