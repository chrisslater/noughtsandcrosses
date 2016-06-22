const expect = require('chai').expect;
const Grid = require('../Grid');
const Naught = require('../Naught');
const Cross = require('../Cross');

describe('Grid Model', function() {
    "use strict";

    describe('isPlaced()', function() {
        it('should return true if array position is filled', function() {
            const grid = new Grid();
            const naught = new Naught();
            const pos = 0;

            grid.place(naught, pos);
            expect(grid.isPlaced(pos)).to.be.ok;
        });

        it('should return false if array position is empty', function() {
            const grid = new Grid();
            const pos = 0;

            expect(grid.isPlaced(pos)).to.not.be.ok;
        });

    });

    describe('getPlaced()', function() {
        it('should return undefined if no item placed', function () {
            const grid = new Grid();
            const pos = 0;

            expect(grid.getPlaced(pos)).to.equal(undefined);

        });
        it('should return the placed item in position', function () {
            const grid = new Grid();
            const naught = new Naught();
            const pos = 0;

            grid.place(naught, pos);
            expect(grid.getPlaced(pos)).to.equal(naught);
        });
    });

    describe('place()', function() {
        it('should place sign in grid position and return true', function() {
            const grid = new Grid();
            const naught = new Naught();
            const pos = 0;
            const res = grid.place(naught, pos);
            const _grid = grid._grid;
            expect(_grid[0] instanceof Naught).to.equal(true);
            expect(res).to.equal(true);
        });

        it('should return false if already placed', function() {
            const grid = new Grid();
            const naught = new Naught();
            const pos = 0;
            let res;

            res = grid.place(naught, pos);
            expect(res).to.equal(true);

            res = grid.place(naught, pos);
            expect(res).to.equal(false);
        });
    });

    describe('isComplete()', function () {
        it('should return false if not all positions are filled', function () {
            const grid = new Grid();
            expect(grid.isComplete()).to.equal(false);
        });

        it('should return true if game if all positions are filled', function () {
            const grid = new Grid();
            const naught = new Naught();

            for (var i=0; i < 10; i++) {
                grid.place(naught, i);
            }

            expect(grid.isComplete()).to.equal(true);
        });
    });

    describe('isWon()', function () {
        it('should return true if game is won in a top row line', function () {
            const grid = new Grid();
            const naught = new Naught();

            grid.place(naught, 0);
            grid.place(naught, 1);
            grid.place(naught, 2);

            expect(grid.isWon()).to.equal(true);
        });

        it('should return true if game is won in a top row line', function () {
            const grid = new Grid();
            const cross = new Cross();

            grid.place(cross, 2);
            grid.place(cross, 4);
            grid.place(cross, 6);

            expect(grid.isWon()).to.equal(true);
        });

        it('should return false if game is not won', function () {
            const grid = new Grid();
            const naught = new Naught();
            const cross = new Cross();

            grid.place(cross, 2);
            grid.place(naught, 4);
            grid.place(cross, 6);

            expect(grid.isWon()).to.equal(false);
        });
    });

    describe('getWinner()', function () {
        it('should return false if there is currently no winner', function () {
            const grid = new Grid();
            expect(grid.getWinner()).to.equal(false);
        });

        it('should return Sign type if a winner is found', function () {
            const grid = new Grid();
            const cross = new Cross();

            grid.place(cross, 2);
            grid.place(cross, 4);
            grid.place(cross, 6);

            expect(grid.getWinner() instanceof Cross).to.equal(true);
        });
    });

});