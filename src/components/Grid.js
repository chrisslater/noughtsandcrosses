var React = require('react-native');
var {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    PropTypes,
} = React;

var Grid = require('../models/Grid');
var Player = require('../models/Player');
var placeGridItem = require('../actions/placeGridItem');

const _template = [
    [
        { key: 0 },
        { key: 1 },
        { key: 2 },
    ],
    [
        { key: 3 },
        { key: 4 },
        { key: 5 },
    ],
    [
        { key: 6 },
        { key: 7 },
        { key: 8 }
    ]
];

var Grid = React.createClass({

    propTypes: {
        model: PropTypes.instanceOf(Grid).isRequired,
        player: PropTypes.instanceOf(Player).isRequired,
        isReadOnly: PropTypes.bool.isRequired,
    },

    render: function () {
        const {
            model,
            player,
            isReadOnly,
        } = this.props;
        const grid = this.renderGrid(model, player);
        let cover;

        if (isReadOnly) {
            cover = (
                <View style={styles.cover}></View>
            );
        }

        return (
            <View style={styles.container}>
                {grid}
                {cover}
            </View>
        );
    },

    renderGrid (model, player) {
        return _template.map((row, key) => {
            return (
                <View key={key} style={styles.row}>
                    {this.renderGridRowItems(row, model, player)}
                </View>
            );
        });
    },

    renderGridRowItems (row, model, player) {
        return row.map((col, key)  => {
            const sign = model.getPlaced(col.key);
            let symbol;

            if (sign !== undefined) {
                symbol = sign.symbol;
            }

            return (
                <TouchableOpacity key={key} onPress={this.handleOnPress.bind(this, model, col.key, player)}>
                    <View  style={styles.item}>
                        <Text>{symbol}</Text>
                    </View>
                </TouchableOpacity>
            );
        });
    },

    handleOnPress: function () {
        placeGridItem.apply(this, arguments);
    }
});

var styles = StyleSheet.create({
    cover: {
        backgroundColor:  '#ffffff',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0,
    },

    container: {
        //padding: 10,
        backgroundColor: '#000000',
    },

    row: {
        flexDirection: 'row',
    },

    item: {
        padding: 50,
        margin: 10,
        backgroundColor: '#FF0000',
    },

});

module.exports = Grid;