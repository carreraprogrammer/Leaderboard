/* eslint-disable linebreak-style */
import LeaderboardApi from './leaderboard-API.js';

const displayScores = async () => {
  const scores = await LeaderboardApi.getScores();
  const recentScores = scores.result;
  const scoresList = document.querySelector('.tbody');
  scoresList.innerHTML = '';
  recentScores.sort((a, b) => b.score - a.score);
  const topTen = recentScores.slice(0, 10);
  topTen.forEach((score, index) => {
    const li = document.createElement('tr');
    li.innerHTML = `<td>${index + 1}.</td> <td>${score.user}</td> <td>${score.score}</td>`;
    li.classList.add('score-information');
    scoresList.appendChild(li);
  });
};

export default displayScores;