"use strict";
function add(a, b, showResult, text) {
    const result = a + b;
    if (showResult) {
        console.log(text + result);
    }
    else {
        return result;
    }
}
add(4, 5, true, 'Result is : ');
let a = {
    b: 'x',
};
console.log(a.b);
//# sourceMappingURL=all-about-ts-types.js.map