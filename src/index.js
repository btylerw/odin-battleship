import loadUI from "./ui";
import grid from './modules/grid';
import Game from "./modules/game";
import './styles.css';


// Setting up our game elements
const ui = loadUI();
const grid1 = grid.createGrid('player1');
const grid2 = grid.createGrid('player2');
ui.appendChild(grid1);
ui.appendChild(grid2);
const btn_container = document.createElement('div');
btn_container.classList.add('btn-container');
const button = document.createElement('button');
button.setAttribute('id', 'reset');
button.innerHTML = 'Reset';
document.body.appendChild(ui);
btn_container.appendChild(button);
document.body.appendChild(btn_container);
// Play the game
Game();