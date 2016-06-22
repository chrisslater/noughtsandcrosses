var { MapStore, ReduceStore } = require('flux/utils');
var Dispatcher = require('../core/dispatcher');
var Grid = require('../models/Grid');

class AppStore extends ReduceStore {
    getInitialState () {
        return {
            grid: new Grid(),
            turn: 0,
        }
    }

    reduce(state, action: Object): Object {
        const { type, payload } = action;

        console.log('the state', state);

        switch (type) {
            case 'NEW_GAME':
                state.grid = new Grid();
                this.__emitChange();
                break;
            case 'PICK_SIDES':
                state.players = payload.players;
                this.__emitChange();
                break;
            case 'PLACE_SIGN':
                state.turn = state.turn + 1;
                this.__emitChange();
                break;
        }

        return state;
    }
}

module.exports = new AppStore(Dispatcher);