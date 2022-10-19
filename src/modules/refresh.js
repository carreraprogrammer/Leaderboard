import displayScores from "./display-scores"
import LocalStorage from "./Local-storage"

const refresh = () => {
  let recentScores = LocalStorage.getScores()
  recentScores = []
  displayScores(recentScores);
  localStorage.setItem('recentScores', JSON.stringify(recentScores));
}

export default refresh