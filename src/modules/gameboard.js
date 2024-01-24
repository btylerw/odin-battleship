import grid from "./grid";

function Gameboard(player_num) {
    // Stores which player this board belongs to
    const player = player_num;
    // Setting up a 10x10 grid
    const board = Array(10).fill(null).map(() => Array(10).fill(null));
    // ship_count is the total amount of ships on the board, reducing by one each time a ship is sunk
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
            // Reduces ship_count if our ship has been sunk
            if (ship_type.isSunk()) {
                ship_count--;
            }
        } else {
            board[x][y] = 'miss';
        }
        grid.loadGrid(board[x][y], x, y, player);
    }
    // Checks if a grid node has been interacted with yet
    // Used to ensure that the CPU doesn't shoot a grid that has already been shot
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

    // Clears boards
    const resetBoard = (player) => {
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                board[x][y] = null;
                grid.loadGrid(board[x][y], x, y, player)
            }
        }
    }

    // Some getter/setter functions
    const getPlayer = () => player;
    const getBoard = (x, y) => board[x][y];
    const setBoard = (x, y) => board[x][y] = null;
    const getShips = () => ship_count;

    // Checks if every ship has been sunk (the game is over)
    const allSunk = () => { return ship_count === 0; }
    return { placeShip, receiveAttack, allSunk, checkGrid, getGrid, getPlayer, getBoard, getShips, setBoard, resetBoard };
}

export default Gameboard;