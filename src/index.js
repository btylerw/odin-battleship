import loadUI from "./ui";
import createGrid from "./modules/grid";
import Ship from "./modules/ship";
import './styles.css'

//document.body.appendChild(loadUI());
document.body.appendChild(createGrid());
// Ensuring module works
const ship = require('./modules/ship');
const battleship = new ship('battleship', 4);
battleship.hit();
console.log(battleship.isSunk());
battleship.hit();
console.log(battleship.isSunk());
battleship.hit();
console.log(battleship.isSunk());
battleship.hit();
// Ship is hit 4 times, therefore ship is sunk
console.log(battleship.isSunk());
console.log(battleship.type);