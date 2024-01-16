const ship = require('../src/modules/ship');

// Testing to ensure that a ship can be sunk
test('hit function', () => {
    const test_ship = new ship('ship', 2);
    test_ship.hit();
    test_ship.hit();
    expect(test_ship.isSunk()).toBe(true);
});