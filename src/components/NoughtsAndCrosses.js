var React = require('react-native');
var {
    Navigator,
} = React;

var Navigation = require('./Navigation');
var PickSidesScene = require('./PickSidesScene');
var GameScene = require('./GameScene');

var NoughtsAndCrosses = React.createClass({
    render () {
        return (
            <Navigator
                initialRoute={{ index: 0 }}
                renderScene={this.renderTheScene}
                configureScene={this.configureTheScene}
            />
        );
    },

    configureTheScene (route) {
        return Navigator.SceneConfigs.FloatFromRight;
    },

    renderTheScene (route, navigator) {
        const {
            players,
            grid,
            turn,
            } = this.props;

        if (players) {
            return (
                //<Navigation navigator={navigator}>
                    <GameScene
                        grid={grid}
                        players={players}
                        turn={turn}
                    />
                //</Navigation>
            );
        } else {
            return (
                //<Navigation navigator={navigator}>
                    <PickSidesScene />
                //</Navigation>
            );
        }
    },
});

module.exports = NoughtsAndCrosses;
