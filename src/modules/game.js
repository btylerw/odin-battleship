import Gameboard from "../modules/gameboard";
const Player = require('../modules/player');
const ship = require('../modules/ship');

function Game() {
    // Creating listener here so we can parse the data of the node clicked
    const onClick = (e) => {
        console.log(e.srcElement.id);
    }
    window.addEventListener('click', onClick);
    // Creating our game objects
    const p1board = new Gameboard('player1');
    const p2board = new Gameboard('player2');
    const battleship = new ship('battleship', 4);
    const player2 = new Player('player2', false);
    p1board.placeShip(battleship, battleship.length, 'vertical', 0, 0);
    p1board.receiveAttack(1, 0);
    player2.autoshoot(p2board);
}

export default Game;