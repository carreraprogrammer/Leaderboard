import NewScore from './new-score'
import LocalStorage from './Local-storage'
import displayScores from './display-scores'
// Function to display a new score 

const addScore = (name, score) => {
    const recentScores = LocalStorage.getScores();
    const newScore = new NewScore(name, score)
    recentScores.push(newScore);
    displayScores(recentScores);
    localStorage.setItem('recentScores', JSON.stringify(recentScores));
  }

export default addScore