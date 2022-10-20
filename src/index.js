import './style.css';
import addScore from './modules/add-score'
import displayScores from './modules/display-scores'
import LeaderboardApi from './modules/leaderboard-API'

// Function to display scores

let recentScores = LeaderboardApi.getScores()

displayScores(recentScores)

// Add event listener to submitBtn

const submitBtn = document.querySelector('.submit')
const name = document.querySelector('#name-input')
const score = document.querySelector('#score-input')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addScore(name.value, score.value)
    name.value = ''
    score.value = ''
})

// Add event listener to refreshBtn