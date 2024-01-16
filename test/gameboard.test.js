import Gameboard from '../src/modules/gameboard';
const ship = require('../src/modules/ship');

// Tests that receiveAttack will increase ship's hitcount
test('testing receiveAttack', () => {
    const test_board = new Gameboard;
    const test_ship = new ship('battleship', 4);
    test_board.placeShip(test_ship, 4, 'vertical', 0, 0);
    test_board.receiveAttack(0, 0);
    expect(test_ship.hit_count).toBe(1);
});

// Testing to ensure that sinking ships will reduce our ship count
test('testing allSunk', () => {
    const test_board = new Gameboard;
    const test_ship1 = new ship('battleship', 1);
    const test_ship2 = new ship('battleship', 1);
    const test_ship3 = new ship('battleship', 1);
    const test_ship4 = new ship('battleship', 1);
    const test_ship5 = new ship('battleship', 1);
    test_board.placeShip(test_ship1, 1, 'vertical', 0, 0);
    test_board.placeShip(test_ship2, 1, 'vertical', 1, 0);
    test_board.placeShip(test_ship3, 1, 'vertical', 2, 0);
    test_board.placeShip(test_ship4, 1, 'vertical', 3, 0);
    test_board.placeShip(test_ship5, 1, 'vertical', 4, 0);
    for (let i = 0; i < 5; i++) {
        test_board.receiveAttack(i, 0);
    }
    expect(test_board.allSunk()).toBe(true);
});

test('testing checkGrid', () => {
    const test_board = new Gameboard;
    const test_ship = new ship('battleship', 1);
    test_board.placeShip(test_ship, 1, 'vertical', 0, 0);
    test_board.receiveAttack(0, 0);
    expect(test_board.checkGrid(0, 0)).toBe(false);
})