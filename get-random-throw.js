import { makeRockPaperScissors } from "./utils.js";

// initialize state
let computerRandom = 0;
let computerPickString = '';

export function didUserWin (player, computer){
    if(player === computer){return 'tie'}
    if(player === "rock" && computer === 'scissors'){return 'win'}
    if(player === "paper" && computer === 'rock'){return 'win'}
    if(player === "scissors" && computer === 'paper'){return 'win'}
    else {return 'lose'}
}

export function randomComputerPick(){
    computerRandom = Math.floor(Math.random()*3)
    return computerPickString = makeRockPaperScissors(computerRandom)
}
// export function didUserWin (player, computer){
//     if(player === computer){
//         tie()
//         computerPickSpan.textContent = computer
//         userPickSpan.textContent = player
//     } else if(player === "rock" && computer === 'scissors'){
//         win()
//         userPickSpan.textContent = player
//         computerPickSpan.textContent = computer
//     } else if(player === "rock" && computer === "paper"){
//         loss()
//         userPickSpan.textContent = player
//         computerPickSpan.textContent = computer
//     } else if(player === "paper" && computer === 'rock'){
//         win()
//         userPickSpan.textContent = player
//         computerPickSpan.textContent = computer
//     } else if(player === "paper" && computer === "scissors"){
//         loss()
//         userPickSpan.textContent = player
//         computerPickSpan.textContent = computer
//     } else if(player === "scissors" && computer === 'paper'){
//         win()
//         userPickSpan.textContent = player
//         computerPickSpan.textContent = computer
//     } else if(player === "scissors" && computer === "rock"){
//         loss()
//         userPickSpan.textContent = player
//         computerPickSpan.textContent = computer
//     } 
// }