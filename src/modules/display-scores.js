const displayScores = (scores) => {
    const scoresList = document.querySelector('.scores-list')
    scoresList.innerHTML = '';
    scores.forEach((score) => {
        const li = document.createElement('li')
        li.innerHTML =`${score.name}: ${score.score}`
        li.classList.add('score-information')
        scoresList.appendChild(li)
    })
}

export default displayScores