var React = require('react-native');
var {
    DrawerLayoutAndroid,
    TouchableOpacity,
    Text,
    View,
} = React;

class Navigation extends React.Component {
    render () {
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={this._renderNavigation.bind(this)}
            >
                {this.props.children}
            </DrawerLayoutAndroid>
        );
    }


    _renderNavigation () {
        return (
            <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
                <TouchableOpacity
                    onPress={this.handleOnPress.bind(this)}
                >
                    <View>
                        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
            </View>
        );
    }

    handleOnPress () {
        const { navigator } = this.props;

        navigator.replace({
            index: 1,
        });
    }
}

module.exports = Navigation;