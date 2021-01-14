// IMPORT MODULES under test here:
import { makeRockPaperScissors } from '../utils.js';
// import { didUserWin } from '../get-random-throw.js';

const test = QUnit.test;

test('if zero is entered as arguement then rock will result', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeRockPaperScissors(0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('if 1 is entered as arguement then paper will result', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeRockPaperScissors(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('if two is entered as arguement then scissors will result', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'scissors';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeRockPaperScissors(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

