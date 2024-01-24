import Gameboard from "../modules/gameboard";
const Player = require('../modules/player');
const ship = require('../modules/ship');
import grid from "./grid";

function Game() {
    // Creating listener here so we can parse the data of the node clicked
    const onClick = (e) => {
        console.log(e.srcElement.id);
        const data = e.srcElement.id.split('.');
        if (data[0] === 'player2' && player1.turn) {
            const coords = data[1].split('-');
            player1.shoot(coords[0], coords[1], p2board);
            player1.turn = !player1.turn;
            player2.turn = !player2.turn;
            console.log(p2board.getShips());
            const result =  checkForEnd(p1board, p2board);
            if (result) {
                console.log(result);
            }
            setTimeout(cpu_turn, 1000);
        }
    }

    function cpu_turn() {
        player2.autoshoot(p1board);
        player1.turn = !player1.turn;
        player2.turn = !player2.turn;
    }
    window.addEventListener('click', onClick);
    // Creating our game objects
    const p1board = new Gameboard('player1');
    const p2board = new Gameboard('player2');
    const battleship = new ship('battleship', 4);
    const carrier = new ship('carrier', 5);
    const destroyer = new ship('destroyer', 3);
    const submarine = new ship('submarine', 3);
    const patrol_boat = new ship('patrolboat', 2);
    const player1 = new Player('player1', true);
    const player2 = new Player('player2', false);
    p1board.placeShip(battleship, battleship.length, 'vertical', 0, 0);
    p1board.placeShip(carrier, carrier.length, 'vertical', 0, 1);
    p1board.placeShip(destroyer, destroyer.length, 'vertical', 0, 2);
    p1board.placeShip(submarine, submarine.length, 'vertical', 0, 3);
    p1board.placeShip(patrol_boat, patrol_boat.length, 'vertical', 0, 4);
    p2board.placeShip(battleship, battleship.length, 'vertical', 0, 0);
    p2board.placeShip(carrier, carrier.length, 'vertical', 0, 1);
    p2board.placeShip(destroyer, destroyer.length, 'vertical', 0, 2);
    p2board.placeShip(submarine, submarine.length, 'vertical', 0, 3);
    p2board.placeShip(patrol_boat,patrol_boat.length, 'vertical', 0, 4);
    
    function checkForEnd(p1board, p2board) {
        const winner = document.getElementById('winner-box');
        if (p1board.allSunk()) {
            winner.innerHTML = "Player 2 Wins!";
        } else if (p2board.allSunk()) {
            winner.innerHTML = "Player 1 Wins!";
            winner.style.display = 'flex';
        }
    }

    function clearBoards() {
        p1board.resetBoard('player1');
        p2board.resetBoard('player2');

    }

    const button = document.getElementById('reset');
    button.addEventListener('click', clearBoards);
}

export default Game;