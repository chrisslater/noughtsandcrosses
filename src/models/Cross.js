const Sign = require('./Sign');

function Cross () {
    "use strict";
    Sign.call(this); // call super constructor.

    this.symbol = 'X';
}

Cross.prototype = Object.create(Sign.prototype);
Cross.prototype.constructor = Cross;

module.exports = Cross;