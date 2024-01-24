import Gameboard from "../modules/gameboard";
const Player = require('../modules/player');
const ship = require('../modules/ship');
import grid from "./grid";

function Game() {
    // Creating listener here so we can parse the data of the node clicked
    const onClick = (e) => {
        // IDs on the grid contain player and grid location data
        console.log(e.srcElement.id);
        const data = e.srcElement.id.split('.');
        // Ensuring clicked node is on enemy grid
        if (data[0] === 'player2' && player1.turn) {
            const coords = data[1].split('-');
            player1.shoot(coords[0], coords[1], p2board);
            // Change turns
            player1.turn = !player1.turn;
            player2.turn = !player2.turn;
            // Check if game is over
            checkForEnd(p1board, p2board);
            // 1 second delay before CPU takes its turn
            setTimeout(cpu_turn, 1000);
        }
    }
    
    function cpu_turn() {
        player2.autoshoot(p1board);
        player1.turn = !player1.turn;
        player2.turn = !player2.turn;
        // Check if game is over
        checkForEnd(p1board, p2board);
    }
    window.addEventListener('click', onClick);
    // Creating our game objects
    const p1board = new Gameboard('player1');
    const p2board = new Gameboard('player2');
    const battleship1 = new ship('battleship', 4);
    const carrier1 = new ship('carrier', 5);
    const destroyer1 = new ship('destroyer', 3);
    const submarine1 = new ship('submarine', 3);
    const patrol_boat1 = new ship('patrolboat', 2);
    const battleship2 = new ship('battleship', 4);
    const carrier2 = new ship('carrier', 5);
    const destroyer2 = new ship('destroyer', 3);
    const submarine2 = new ship('submarine', 3);
    const patrol_boat2 = new ship('patrolboat', 2);
    const player1 = new Player('player1', true);
    const player2 = new Player('player2', false);
    // Placing our ships
    p1board.placeShip(battleship1, battleship1.length, 'vertical', 0, 0);
    p1board.placeShip(carrier1, carrier1.length, 'vertical', 0, 1);
    p1board.placeShip(destroyer1, destroyer1.length, 'vertical', 0, 2);
    p1board.placeShip(submarine1, submarine1.length, 'vertical', 0, 3);
    p1board.placeShip(patrol_boat1, patrol_boat1.length, 'vertical', 0, 4);
    p2board.placeShip(battleship2, battleship2.length, 'vertical', 0, 0);
    p2board.placeShip(carrier2, carrier2.length, 'vertical', 0, 1);
    p2board.placeShip(destroyer2, destroyer2.length, 'vertical', 0, 2);
    p2board.placeShip(submarine2, submarine2.length, 'vertical', 0, 3);
    p2board.placeShip(patrol_boat2, patrol_boat2.length, 'vertical', 0, 4);
    
    // Checks to see if all of the ships are sunk on a grid
    function checkForEnd(p1board, p2board) {
        const winner = document.getElementById('winner-box');
        // If someone is a winner, displays message noting who won
        if (p1board.allSunk()) {
            winner.innerHTML = "Player 2 Wins!";
            winner.style.display = 'flex';
        } else if (p2board.allSunk()) {
            winner.innerHTML = "Player 1 Wins!";
            winner.style.display = 'flex';
        }
    }

    // Clear grids to restart the game
    function clearBoards() {
        p1board.resetBoard('player1');
        p2board.resetBoard('player2');

    }

    // Adds listener for reset button to reset game
    const button = document.getElementById('reset');
    button.addEventListener('click', clearBoards);
}

export default Game;