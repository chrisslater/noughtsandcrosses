const React = require('react-native');
const {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Component
    } = React;

const newGame = require('../actions/newGame');
const Grid = require('./Grid');

class GameScene extends Component {
    render () {
        const {
            grid,
            players,
            turn,
        } = this.props;

        const current = turn % 2;
        const currentPlayer = players[current];
        const playersMarkup = this.renderPlayers(players, current);
        let newGameMarkup;
        let isReadOnly = false;

        if (grid.isWon() || grid.isComplete()) {
            isReadOnly = true;
            newGameMarkup = this.renderNewGame(grid);
        }

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to NaughtsAndCrosses!
                </Text>
                <View>
                    {playersMarkup}
                </View>

                <Grid
                    isReadOnly={isReadOnly}
                    model={grid}
                    player={currentPlayer}
                />
                {newGameMarkup}
            </View>
        );
    }

    renderPlayers (players, current) {
        return players.map((player, key) => {
            const _styles = (current === key) ? styles.currentPlayer : styles.player;
            return (
              <View key={key} style={_styles}>
                  <Text>
                      {`${player.getName()}: ${player.wins}`}
                  </Text>
              </View>
            );
        });
    }

    renderNewGame () {
        return (

            <TouchableOpacity
                onPress={this.handleNewGame}
            >
                <View>
                    <Text>New Game</Text>
                </View>
            </TouchableOpacity>
        );
    }

    handleNewGame () {
        newGame();
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    player: {
        backgroundColor: '#F5FCFF',
    },
    currentPlayer: {
        backgroundColor: '#FFF336',
    }
});

module.exports = GameScene;