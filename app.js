/*
Game function:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify palyer of guesses remaining
- Notify player of the correct answer if loose
- Let palyer choose to play again
*/

// Game values
let min = 4,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBTN = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;
