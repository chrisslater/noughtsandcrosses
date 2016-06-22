const Dispatcher = require('../core/dispatcher');
const Grid = require('../models/Grid');

module.exports = ()  => {
    Dispatcher.dispatch({
        type: 'NEW_GAME'
    });
};
