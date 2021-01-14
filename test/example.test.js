// IMPORT MODULES under test here:
import { didUserWin } from '../get-random-throw.js';
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
test('rock and rock are passed as arguements tie will result', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'tie';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin("rock","rock");

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('rock and scissors are passed as arguements win will result', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin("rock","scissors");

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('rock and paper are passed as arguements lose will result', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin("rock","paper");

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('paper and rock are passed as arguements win will result', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin("paper","rock");

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('rock and paper are passed as arguements lose will result', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin("rock","paper");

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
