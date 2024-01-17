function Player(name, turn) {
    this.name = name;
    this.turn = turn;
    this.shoot = function(x, y, board) {
        board.receiveAttack(x, y);
    }
    this.autoshoot = function(board) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        if (board.checkGrid(x, y)) {
            //pass
            board.receiveAttack(x, y);
        } else {
            this.autoshoot(board);
        }
    }
};

module.exports = Player;