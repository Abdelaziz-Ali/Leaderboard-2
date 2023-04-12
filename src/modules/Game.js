export const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const header = { name: "Nabeel Ahmed's Game" };

const Game = async () => {
  await fetch(`${BASE_URL}/games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(header),
  })
    .then((response) => response.json())
    .then((data) => {
      const resultString = data.result;
      const code = resultString.split(' ')[3];
      // console.log('I am code', code);
      localStorage.setItem('GameID', code);
    });
};

export default Game;