
import LeaderboardApi from './leaderboard-API'
import displayScores from './display-scores'

// Function to display a new score 

const addScore = (name, score) => {

    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/v8GE9MRTBXXJYcKrLNZf/scores/', {
        method: 'POST',
        body: JSON.stringify({
            "user": name,
            "score": score
          }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((json) => console.log(json))    

    let recentScores = LeaderboardApi.getRecentScores();
    displayScores(recentScores);

  }

export default addScore