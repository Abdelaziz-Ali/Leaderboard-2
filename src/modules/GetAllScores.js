import { BASE_URL } from './Game.js';

const id = localStorage.getItem('GameID');
const GetAllScores = async () => {
  await fetch(`${BASE_URL}/games/:${id}/scores/`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      const scoresList = data.result;
      localStorage.setItem('scoreList', JSON.stringify(scoresList));
    });
};

export default GetAllScores;