var React = require('react-native');
var {
    AppRegistry,
    } = React;
var AppContainer = require('./src/containers/AppContainer');
var NoughtsAndCrosses = require('./src/components/NoughtsAndCrosses');

AppRegistry.registerComponent('NoughtsAndCrosses', () => AppContainer(NoughtsAndCrosses));
