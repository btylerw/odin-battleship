import loadUI from "./ui";
import createGrid from "./modules/grid";
import Gameboard from "./modules/gameboard";
import './styles.css'

//document.body.appendChild(loadUI());
document.body.appendChild(createGrid('player1'));
// Ensuring module works
const ship = require('./modules/ship');
const board = new Gameboard;
const battleship = new ship('battleship', 4);
board.placeShip(battleship, battleship.length, 'vertical', 0, 0);