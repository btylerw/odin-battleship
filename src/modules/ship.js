// Ship module. Contains all necessary information/functions to create a new ship
function Ship(type, length) {
    this.type = type;
    this.length = length;
    this.hit_count = 0;
    this.sunk = false;
    this.hit = function() {
        this.hit_count++;
    }
    this.isSunk = function() {
        if (this.hit_count === this.length) {
            this.sunk = true;
        }
        return this.sunk;
    }
};

module.exports = Ship;