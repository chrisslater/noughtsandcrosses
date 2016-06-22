const Naught = require('./Naught');
const Cross = require('./Cross');

const _combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function Grid (props) {
    'use strict';

    Object.assign(this, props);

    this._grid = [];
    this._winner = false;
    this._moves = 0;

    this.getWinner = function () {
        return this._winner;
    };

    this.isPlaced = function (pos: number) {
        return this._grid[pos] !== undefined;
    };

    this.getPlaced = function (pos: number) {
        return this._grid[pos];
    };

    this.place = function (sign: Naught, pos: number) {

        if (this.isPlaced(pos)) {
            return false;
        }

        this._grid[pos] = sign;
        this._moves = this._moves + 1;
        this.isWon();
        return true;
    };

    this.isComplete = function () {
        return this._moves >= 9;
    };

    this.isWon = function () {

        for (let i=0; i < _combos.length; i++) {
            let combo = _combos[i];

            if (this.check.apply(this, combo)) {
                return true;
            }
        }

        return false;
    };

    this.check = function () {
        const args = Array.prototype.slice.call(arguments);
        const theRest = args.slice(1);
        let comparator = this._grid[args[0]];
        let test=0;

        if (comparator) {
            for (let i = 0; i < theRest.length; i++) {
                let gridNum = theRest[i];
                if (this._grid[gridNum] && comparator.constructor === this._grid[gridNum].constructor) {
                    test = test + 1;
                }
            }

            if (test === 2) {
                this._winner = comparator;
                return true;
            }
        }

        return false;
    };

}

module.exports = Grid;
