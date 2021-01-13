// import functions and grab DOM elements
import makeRockPaperScissors from "./utils.js";
const submitButton = document.getElementById("submit-button")
const resetButton = document.getElementById("reset-button")
// const resultsDiv = document.getElementById("results-div")
const userPickSpan = document.getElementById("user-pick")
const computerPickSpan = document.getElementById("computer-pick")
const numResets = document.getElementById("num-resets")

// initialize state
let resets = 0;
// set global variable
const computerRandom = Math.floor(Math.random()*3)
const computerPick = makeRockPaperScissors(computerRandom)
console.log(computerPick);
// set event listeners to update state and DOM
submitButton.addEventListener("click", () =>{
    
    const userPick = document.querySelector("input[type=radio]:checked").value;
    console.log(userPick)

    if(userPick === computerPick){
        console.log("draw")
    } else if (userPick === 'rock' && computerPick === 'paper'){
        console.log('you loser')
    } else if (userPick === 'rock' && computerPick === 'scissors'){
        console.log('you win')
    } else if (userPick === 'paper' && computerPick === 'scissors'){
        console.log('you loser')
    } else if (userPick === 'paper' && computerPick === 'rock'){
        console.log('you win')
    } else if (userPick === 'scissors' && computerPick === 'rock'){
        console.log('you loser')
    } else if (userPick === 'scissors' && computerPick === 'paper'){
        console.log('you win')
    }

})

resetButton.addEventListener("click", () =>{
    
})


function userRock(){
    if (computerPick === 'paper'){
        console.log('you lose')
    }
        console.log('you win')
    }

