"use strict";
var Currency;
(function (Currency) {
    Currency.DEFAULT = 'USD';
    function from(value, unit = Currency.DEFAULT) {
        return { unit, value };
    }
    Currency.from = from;
})(Currency || (Currency = {}));
let amountDue = {
    unit: 'USD',
    value: 20000,
};
let anotherAmountDue = Currency.from(200, 'EUR');
console.log(anotherAmountDue);
var Color;
(function (Color) {
    Color["RED"] = "#ff0000";
    Color["GREEN"] = "#00ff00";
    Color["BLUE"] = "#0000f";
})(Color || (Color = {}));
(function (Color) {
    function getCloset(to) {
        return to === Color.RED ? Color.RED : Color.GREEN;
    }
    Color.getCloset = getCloset;
})(Color || (Color = {}));
const a = Color.getCloset('#ff0000');
console.log(a);
//# sourceMappingURL=namespaces-module.js.map