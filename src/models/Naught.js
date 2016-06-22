const Sign = require('./Sign');

function Naught () {
    "use strict";

    Sign.call(this);

    this.symbol = '0';
}

Naught.prototype = Object.create(Sign.prototype);
Naught.prototype.constructor = Naught;

module.exports = Naught;