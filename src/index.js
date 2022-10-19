import './style.css';
import addScore from './modules/add-score'
import LocalStorage from './modules/Local-storage'
import displayScores from './modules/display-scores'
import refresh from './modules/refresh'

// Function to display scores

let recentScores = LocalStorage.getScores()
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

const refreshBtn = document.querySelector('.refresh')

refreshBtn.addEventListener('click', refresh)
