function Gameboard() {
    const board = Array(10).fill(null).map(() => Array(10).fill(null));
    let ship_count = 5;
    // Stores ship at each node depending on how long it is
    const placeShip = (ship_type, length, direction, x, y) => {
        for (let i = 0; i < length; i++) {
            if (direction === 'vertical') {
                board[x][y+i] = ship_type;
            } else {
                board[x+i][y] = ship_type;
            }
        }
    }
    // Checks grid coordinates for a ship, hits ship or changes empty node to 'miss'
    const receiveAttack = (x, y) => {
        if (board[x][y] && board[x][y] != 'miss') {
            const ship_type = board[x][y];
            ship_type.hit();
            if (ship_type.isSunk()) {
                ship_count--;
            }
        } else {
            board[x][y] = 'miss';
        }
    }
    const allSunk = () => { return ship_count === 0; }
    return { placeShip, receiveAttack, allSunk };
}

export default Gameboard;