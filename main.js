// GLOBAL VARIABLES

var minRange = document.querySelector('#min-range');
var maxRange = document.querySelector('#max-range');
var currentMin = document.querySelector('#current-min');
var currentMax = document.querySelector('#current-max');
var updateButton = document.querySelector('#update');
var name1 = document.querySelector('#name-1');
var name2 = document.querySelector('#name-2');
var nameOneGuess = document.querySelector('#name-1-guess');
var nameTwoGuess = document.querySelector('#name-2-guess');
var submitGuessButton = document.querySelector('#submit-guess');
var resetGameButton = document.querySelector('#reset-game');
var clearGameButton = document.querySelector('#clear-game');
var latestScoreNum1 = document.querySelector('#latest-score-num-1');
var latestScoreNum2 = document.querySelector('#latest-score-num-2');
var challenger1Feedback = document.querySelector('.challenger-1-feedback');
var challenger2Feedback = document.querySelector('.challenger-2-feedback');
var min = 1;
var max = 100;
var randomNumber = getRandomWithinRange(min, max);
// Math.floor(Math.random() * (maxRange.value-minRange.value + 1)) + minRange.value;
console.log('test', randomNumber);




//EVENT LISTENERS

updateButton.addEventListener('click', getRandomNumber);
submitGuessButton.addEventListener('click', submitGuessPlayerOne);
submitGuessButton.addEventListener('click', submitGuessPlayerTwo);
name1.addEventListener('keyup', resetClearButtonEnableDisable);
name2.addEventListener('keyup', resetClearButtonEnableDisable);
nameOneGuess.addEventListener('keyup', resetClearButtonEnableDisable);
nameTwoGuess.addEventListener('keyup', resetClearButtonEnableDisable);
resetGameButton.addEventListener('click', getRandomWithinRange);
clearGameButton.addEventListener('click', clearFields);


//FUNCTIONS

function resetClearButtonEnableDisable() {
  var inputFields = document.querySelectorAll('.user-input');
  for(var i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value) {
      clearGameButton.disabled = false;
      resetGameButton.disabled = false;
    }
  }
}
function clearFields(e) {
  e.preventDefault();
  name1.value = '';
  name2.value = '';
  nameOneGuess.value = '';
  nameTwoGuess.value = '';
}

function getRandomNumber(e) {
  e.preventDefault();
  var minRangeInput = minRange.value;
  var maxRangeInput = maxRange.value;
  currentMin.innerText = minRangeInput;
  currentMax.innerText = maxRangeInput;
  randomNumber = getRandomWithinRange(minRange.value, maxRange.value);
  console.log(randomNumber);
  return randomNumber;
}

function getRandomWithinRange(minRange, maxRange) { 
  minRange = Math.ceil(minRange);
  maxRange = Math.floor(maxRange);
  return Math.floor(Math.random() * (maxRange - minRange)) + minRange;
}

function submitGuessPlayerOne(e) {
  e.preventDefault();
  latestScoreNum1.innerText = nameOneGuess.value;
  if (nameOneGuess.value > randomNumber){
    challenger1Feedback.innerText = 'That\'s too high';
} else if (nameOneGuess.value < randomNumber) {
    challenger1Feedback.innerText = 'That\'s too low';
  } else {
    challenger1Feedback.innerText = 'BOOM!';
      }
   }

function submitGuessPlayerTwo(e) {
  e.preventDefault();
  latestScoreNum2.innerText = nameTwoGuess.value;
  if (nameTwoGuess.value > randomNumber){
    challenger2Feedback.innerText = 'That\'s too high';
} else if (nameTwoGuess.value < randomNumber) {
    challenger2Feedback.innerText = 'That\'s too low';
  } else {
    challenger2Feedback.innerText = 'BOOM!';
      }
   }
