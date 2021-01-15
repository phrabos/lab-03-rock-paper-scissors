import { makeRockPaperScissors } from "./utils.js";

// initialize state
let computerRandom = 0;

export function didUserWin(player, computer) {
    if (player === computer) { return 'tie' }
    if (player === "rock" && computer === 'scissors') { return 'win' }
    if (player === "paper" && computer === 'rock') { return 'win' }
    if (player === "scissors" && computer === 'paper') { return 'win' }
    else { return 'lose' }
}

export function randomComputerPick() {
    computerRandom = Math.floor(Math.random() * 3)
    return makeRockPaperScissors(computerRandom)
}
