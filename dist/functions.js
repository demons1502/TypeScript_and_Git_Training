"use strict";
function log(message, userId) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}
log('Page loaded');
log('User signed in', 'da763be');
function log2(message, userId = 'Not signed in') {
    let time = new Date().toISOString();
    console.log(time, message, userId);
}
log2('User clicked on a button', 'da763be');
log2('User signed out');
function log3(message, context = {}) {
    let time = new Date().toISOString();
    console.log(time, message, context.userId, context.appId);
}
log3('Hello Hau 1');
log3('Hello Hau', { appId: '1', userId: '2' });
function sumVariadicSafe(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumVariadicSafe(1, 2, 3));
function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
const fibonacciGenerator = createFibonacciGenerator();
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
let numbers = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    },
};
for (let a of numbers) {
    console.log(a);
}
let reserve = (fromOrDestination, toOrDestination, destination) => {
    if (fromOrDestination instanceof Date &&
        toOrDestination instanceof Date &&
        destination !== undefined) {
    }
    else if (fromOrDestination instanceof Date &&
        typeof toOrDestination === 'string') {
    }
    else if (typeof fromOrDestination === 'string') {
    }
};
//# sourceMappingURL=functions.js.map