var React = require('react-native');
var {
    TouchableOpacity,
    Text,
    View,
    Component
    } = React;

var pickSide = require('../actions/pickSide');

class PickSidesScene extends Component {

    render () {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.handleOnPress('nought')}
                >
                    <View>
                        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Naughts</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.handleOnPress('cross')}
                >
                    <View>
                        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Crosses</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    handleOnPress (type) {
        pickSide(type);
    }
}

module.exports = PickSidesScene;