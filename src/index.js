import './style.css';
import LeaderboardApi from './modules/leaderboard-API'
import addScore from './modules/add-score'
import displayScores from './modules/display-scores';

// Add event to submit button

const submitBtn = document.querySelector('.submit');
const name = document.querySelector('#name-input');
const score = document.querySelector('#score-input');

submitBtn.addEventListener('click', (e) => {
   if(name.value.length > 0 && score.value.length > 0){
    e.preventDefault()
    addScore(name.value, score.value)
    const result = LeaderboardApi.getScores()
    console.log(result)
    name.value = '';
    score.value = '';
    error.classList.add('ocult')
   } else {
    const error = document.querySelector('.error');
    error.classList.remove('ocult')
   }
})

// Add event to refresh button

const refreshBtn = document.querySelector('.refresh')

refreshBtn.addEventListener('click', displayScores)