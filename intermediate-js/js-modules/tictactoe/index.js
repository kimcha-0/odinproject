import {playGame} from './game.js';

const playGameBtn = document.createElement('button');
playGameBtn.className = 'play-game';
playGameBtn.id = 'start-btn';
playGameBtn.addEventListener('click', playGame());
