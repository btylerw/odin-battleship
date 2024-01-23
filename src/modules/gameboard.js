import grid from "./grid";

function Gameboard(player_num) {
    const player = player_num;
    const board = Array(10).fill(null).map(() => Array(10).fill(null));
    let ship_count = 5;
    // Stores ship at each node depending on how long it is
    const placeShip = (ship_type, length, direction, x, y) => {
        for (let i = 0; i < length; i++) {
            if (direction === 'vertical') {
                board[x+i][y] = ship_type;
            } else {
                board[x][y+i] = ship_type;
            }
        }
    }
    // Checks grid coordinates for a ship, hits ship or changes empty node to 'miss'
    const receiveAttack = (x, y) => {
        if (board[x][y] && board[x][y] != 'miss') {
            const ship_type = board[x][y];
            ship_type.hit();
            board[x][y] = 'shot';
            if (ship_type.isSunk()) {
                ship_count--;
            }
        } else {
            board[x][y] = 'miss';
        }
        grid.loadGrid(board[x][y], x, y, player);
    }
    const checkGrid = (x, y) => {
        let shot = false;
        if (board[x][y] != 'shot' && board[x][y] != 'miss') {
            shot = true;
        }
        return shot;
    }
    
    const getGrid = (x, y) => {
        return board[x][y];
    }

    const getPlayer = () => player;
    const getBoard = (x, y) => board[x][y];
    const setBoard = (x, y) => board[x][y] = null;
    const getShips = () => ship_count;

    const allSunk = () => { return ship_count === 0; }
    return { placeShip, receiveAttack, allSunk, checkGrid, getGrid, getPlayer, getBoard, getShips, setBoard };
}

export default Gameboard;