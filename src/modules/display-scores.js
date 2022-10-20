import LeaderboardApi from "./leaderboard-API";



const displayScores = async () => {
const scores = await LeaderboardApi.getScores();
const recentScores = scores.result
const scoresList = document.querySelector('.scores-list')
scoresList.innerHTML = '';
console.log(recentScores)
recentScores.forEach((score) => {
    const li = document.createElement('li')
    li.innerHTML =`${score.user}: ${score.score}`
    li.classList.add('score-information')
    scoresList.appendChild(li)
})

}

export default displayScores;