import './style.css';
import Game from './modules/Game.js';
import GetAllScores from './modules/GetAllScores.js';
import SaveScore from './modules/SaveScore.js';

const refreshBtn = document.getElementById('refresh');
const form = document.getElementById('form');
const player = document.getElementById('player');
const points = document.getElementById('points');
const scoreListDisplay = document.getElementById('recentScoresList');
if (!localStorage.getItem('GameID')) {
  Game();
}
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  await SaveScore({ player: player.value, points: points.value });
});
refreshBtn.addEventListener('click', async () => {
  await GetAllScores();
  const scoreList = JSON.parse(localStorage.getItem('scoreList'));
  scoreListDisplay.innerHTML = '';
  scoreList.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `${element.user} : ${element.score}`;
    scoreListDisplay.appendChild(li);
  });
});
