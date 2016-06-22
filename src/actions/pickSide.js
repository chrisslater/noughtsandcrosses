const Dispatcher = require('../core/dispatcher');
const Grid = require('../models/Grid');
const Player = require('../models/Player');
const Naught = require('../models/Naught');
const Cross = require('../models/Cross');

module.exports = side => {

    let sideOne;
    let sideTwo;

    if (side === 'nought') {
        sideOne = Naught;
        sideTwo = Cross;
    } else {
        sideOne = Cross;
        sideTwo = Naught;
    }


    const _payload = {
        players: [
            new Player({
                firstname: 'player',
                lastname: 'one',
                Sign: sideOne,
            }),

            new Player({
                firstname: 'player',
                lastname: 'two',
                Sign: sideTwo,
            }),
        ],
    };

    console.log('sides payload', Dispatcher.dispatch);


    Dispatcher.dispatch({
        type: 'PICK_SIDES',
        payload: _payload
    });
};