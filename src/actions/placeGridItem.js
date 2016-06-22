const Dispatcher = require('../core/dispatcher');
const React = require('react-native');
const newGame = require('./newGame');
const {
    Alert,
} = React;

module.exports = (grid, pos, player)  => {
    const Sign = player.Sign;
    let title;
    let message;

    grid.place(new Sign(), pos);

    if (grid.isWon()) {
        player.incrementWins();
        title = `Congratulations!`;
        message = `Well done ${player.getName()}, you have won! Click OK to reset the game`;
    } else if (grid.isComplete()) {
        title = `It's a Draw!`;
        message = `Sadly no winners this time! Click OK to reset the game`;
    }

    Dispatcher.dispatch({
        type: 'PLACE_SIGN',
        payload: {
            grid: grid
        },
    });

    if (title && message) {
        Alert.alert(title, message, [{
            text: 'OK',
            onPress: () => {
                newGame()
            }
        }]);
    }
};
