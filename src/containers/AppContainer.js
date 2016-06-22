var React = require('react-native');
var { Container } = require('flux/utils');
var AppStore = require('../stores/AppStore');

module.exports = function (Component) {
    return Container.create(class AppContainer extends React.Component {
        static getStores() {
            return [AppStore];
        }

        static calculateState(prevState) {
            return  AppStore.getState();
        }

        render() {
            return <Component {...this.state} {...this.props}/>;
        }
    }, { pure: false });
};
