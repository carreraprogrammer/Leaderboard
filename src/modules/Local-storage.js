export default class LocalStorage {

    static getScores() {
        let recentScores;
        if(localStorage.getItem('recentScores') === null) {
           return  recentScores = [];
        } else {
           return recentScores = JSON.parse(localStorage.getItem('recentScores'))
        }
    }
    
}