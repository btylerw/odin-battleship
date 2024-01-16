function Player(name, turn) {
    this.name = name;
    this.turn = turn;
    const shoot = (x, y, board) => board.receiveAttack(x, y);
    const autoshoot = (board) => {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        while (!board.checkGrid(x, y)) {
            //pass
        }
        board.receiveAttack(x, y);
    }
};

module.exports = Player;