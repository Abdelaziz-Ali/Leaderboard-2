import { BASE_URL } from './Game.js';

const id = localStorage.getItem('GameID');
const SaveScore = async ({ player, points }) => {
  await fetch(`${BASE_URL}/games/:${id}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: player,
      score: points,
    }),
  })
    .then((response) => response.json())
    .then((data) => data.result);
};

export default SaveScore;