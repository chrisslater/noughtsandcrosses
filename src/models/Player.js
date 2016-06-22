function Player (props) {
    "use strict";

    Object.assign(this, props);

    this.wins = 0;

    this.getName = function () {
        return this.firstname + ' ' + this.lastname;
    };

    this.incrementWins = function () {
        return this.wins = this.wins + 1;
    };
}

module.exports = Player;
