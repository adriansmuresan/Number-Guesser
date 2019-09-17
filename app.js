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
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
  // Set the guess value by parsing it as an integer
  let guess = parseInt(guessInput.value);
  // console.log(guess);
  if(isNaN || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } 
});

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}