import './style.css';
import addScore from './modules/add-score.js';
import displayScores from './modules/display-scores.js';

// Add event to submit button

const submitBtn = document.querySelector('.submit');
const name = document.querySelector('#name-input');
const score = document.querySelector('#score-input');

submitBtn.addEventListener('click', (e) => {
  const error = document.querySelector('.error');
  if (name.value.length > 0 && score.value.length > 0) {
    e.preventDefault();
    addScore(name.value, score.value);
    name.value = '';
    score.value = '';
    error.classList.add('ocult');
  } else {
    error.classList.remove('ocult');
  }
});

// Add event to refresh button

const refreshBtn = document.querySelector('.refresh');

refreshBtn.addEventListener('click', displayScores);