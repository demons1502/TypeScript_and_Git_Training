//Optional parameter
function log(message: string, userId?: string) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}

log('Page loaded');
log('User signed in', 'da763be');

//Default value parameter
function log2(message: string, userId = 'Not signed in') {
    let time = new Date().toISOString();
    console.log(time, message, userId);
}

log2('User clicked on a button', 'da763be');
log2('User signed out');

//Using types
type Context = {
    appId?: string;
    userId?: string;
};

function log3(message: string, context: Context = {}) {
    let time = new Date().toISOString();
    console.log(time, message, context.userId, context.appId);
}
log3('Hello Hau 1');
log3('Hello Hau', { appId: '1', userId: '2' });

//Rest parameters
function sumVariadicSafe(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumVariadicSafe(1, 2, 3));

//Generator function
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

//Iterators
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

//EXERCISE
// 1. Which parts of a function’s type signature does TypeScript infer: the parameters, the return type, or both?

/* TypeScript always infers a function's return type. TypeScript sometimes
infers a function's parameter types, if it can infer them from context (for
example, if the function is a callback). */

// 2. Is JavaScript’s arguments object typesafe? If not, what can you use instead?

/* arguments is not typesafe. Instead, you should use a rest parameter:
Before: function f() { console.log(arguments) }
After: function f(...args: unknown[]) { console.log(args) }
*/

//3. You want the ability to book a vacation that starts immediately. Update the overloaded reserve function from earlier in this chapter (“Overloaded Function Types”) with a third call signature that takes just a destination, without an explicit start date. Update reserve’s implementation to support this new overloaded signature.
type Reservation = unknown;

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation;
    (from: Date, destination: string): Reservation;
    (destination: string): Reservation;
};

let reserve: Reserve = (
    fromOrDestination: Date | string,
    toOrDestination?: Date | string,
    destination?: string
) => {
    if (
        fromOrDestination instanceof Date &&
        toOrDestination instanceof Date &&
        destination !== undefined
    ) {
        // Book a one-way trip
    } else if (
        fromOrDestination instanceof Date &&
        typeof toOrDestination === 'string'
    ) {
        // Book a round trip
    } else if (typeof fromOrDestination === 'string') {
        // Book a trip right away
    }
};
