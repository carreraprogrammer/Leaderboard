// "Game with ID: v8GE9MRTBXXJYcKrLNZf added."

export default class LeaderboardApi {
  static async getScores() {
    const recentScores = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/v8GE9MRTBXXJYcKrLNZf/scores/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json());

    return recentScores;
  }
}
