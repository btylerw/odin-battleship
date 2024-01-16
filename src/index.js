import loadUI from "./ui";
import grid from './modules/grid';
import Gameboard from "./modules/gameboard";
import './styles.css'

//document.body.appendChild(loadUI());
const ui = loadUI();
const grid1 = grid.createGrid('player1');
const grid2 = grid.createGrid('player2');
ui.appendChild(grid1);
ui.appendChild(grid2);
document.body.appendChild(ui);
// Ensuring module works
const ship = require('./modules/ship');
const board = new Gameboard('player1');
const battleship = new ship('battleship', 4);
board.placeShip(battleship, battleship.length, 'vertical', 0, 0);
board.receiveAttack(1, 0);
grid.loadGrid(board, board.getPlayer());