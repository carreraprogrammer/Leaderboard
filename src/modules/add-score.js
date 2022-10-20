import displayScores from './display-scores.js';

// Function to display a new score

const addScore = async (name, score) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/v8GE9MRTBXXJYcKrLNZf/scores/', {
    method: 'POST',
    body: JSON.stringify({ user: name, score }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  displayScores();
};

export default addScore;