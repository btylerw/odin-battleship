import Gameboard from '../src/modules/gameboard';

const Ship = require('../src/modules/ship');
const Player = require('../src/modules/player');

test('Testing player attack function', () => {
    const test_board = new Gameboard;
    const player1 = new Player('player1', true);
    const test_ship1 = new Ship('battleship', 1);
    const test_ship2 = new Ship('battleship', 1);
    const test_ship3 = new Ship('battleship', 1);
    const test_ship4 = new Ship('battleship', 1);
    const test_ship5 = new Ship('battleship', 1);
    test_board.placeShip(test_ship1, 1, 'vertical', 0, 0);
    test_board.placeShip(test_ship2, 1, 'vertical', 1, 0);
    test_board.placeShip(test_ship3, 1, 'vertical', 2, 0);
    test_board.placeShip(test_ship4, 1, 'vertical', 3, 0);
    test_board.placeShip(test_ship5, 1, 'vertical', 4, 0);
    for (let i = 0; i < 5; i++) {
        player1.shoot(i, 0, test_board);
    }
    expect(test_board.allSunk()).toBe(true);
});

test('Checking for miss', () => {
    const test_board = new Gameboard;
    const player1 = new Player('player1', true);
    player1.shoot(0, 0, test_board);
    expect(test_board.getGrid(0, 0)).toBe('miss');
})

test('Checking for hit', () => {
    const test_board = new Gameboard;
    const player1 = new Player('player1', true);
    const test_ship = new Ship('ship', 1);
    test_board.placeShip(test_ship, test_ship.length, 'vertical', 0, 0)
    player1.shoot(0, 0, test_board);
    expect(test_board.getGrid(0, 0)).toBe('shot');
})

test('Testing auto attack function', () => {
    const board = new Gameboard;
    const test_ship = new Ship('ship', 1);
    const player1 = new Player('player1', true);
    // Placing a ship on every single node of the grid to ensure the boards ship_count gets reduced with every accurate shot
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            board.placeShip(test_ship, test_ship.length, 'vertical', i, j);
        }
    }
    for (let i = 0; i < 5; i++) {
        player1.autoshoot(board);
    }
    expect(board.allSunk()).toBe(true);
});