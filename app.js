// import functions and grab DOM elements
import {  didUserWin, resetGame, computerPick  }  from "./get-random-throw.js";
const submitButton = document.getElementById("submit-button")
const resetButton = document.getElementById("reset-button")

// set event listeners to update state and DOM
submitButton.addEventListener("click", () =>{
    const userPick = document.querySelector("input[type=radio]:checked").value;
    didUserWin(userPick, computerPick());
});

resetButton.addEventListener("click", () =>{
    resetGame();
})



    


