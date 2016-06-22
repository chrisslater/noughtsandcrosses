const expect = require('chai').expect;
const Player = require('../Player');

describe('Player Model', function() {
    "use strict";

    describe('getName()', function(){

        it('should return the players name', function() {
            const details = {
                firstname: 'Chris',
                lastname: 'Slater'
            };
            const player = new Player(details);
            expect(player.getName()).to.equal('Chris Slater');
        });

    });

});