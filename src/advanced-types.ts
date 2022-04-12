// TYPE GUARDS
class Car {
    drive() {
        console.log('Drivingggggg....');
    }
}

class Truck {
    drive() {
        console.log('Drivingggggg.... from Truck');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);

// Discriminated Unions
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'horse', runningSpeed: 1000 });

// Index Properties
interface ErrorContainer {
    [prop: string]: string;
}

const a1: ErrorContainer = {
    email: 'Not a valid email!',
    password: 'Must start with a capital character',
};

console.log(a1);

//Optional chaining
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title);

// Nullish Coalescing
const userInput = undefined;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

// Function overload
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('Max', 1);
result.split(' ');
console.log('Result: ' + result);

// EXERCISE
// 1
// 1a
let a: number;
a = 1 as 1; // OK. The type literal 1 is a subtype of number
// 1b
let b: 1;
b = 2 as number; // No, number is a supertype of the type literal 1
// 1c
let c: number | string;
c = 'foo' as string; // OK. string is a subtype of number | string
// 1d
let d: number;
d = true as boolean; // No, the boolean and number type are unrelated
// 1e
let e: (number | string)[];
e = [1] as number[]; // OK.
console.log(e);
// 1f
let f: number[];
f = [1] as (number | string)[]; //No
// 1g
let g: { a: boolean };
g = { a: true } as { a: true }; // OK
// 1h
let h: { a: { b: [number | string] } };
h = { a: { b: ['c'] } } as { a: { b: [string] } }; // OK
// 1i
let i: (a: number) => string;
i = ((b: number) => 'c') as (b: number) => string; //OK
// 1j
let j: (a: string) => string;
j = ((a: number) => 'b') as (a: number) => string; // No
// 1k
let k: (a: string) => string;
k = ((a: number | string) => 'b') as (a: number | string) => string; //OK
// 1l. E.X (defined in an enum enum E {X = 'X'}) and F.X (defined in an enum enum F {X = 'X'})
enum E {
    X = 'X',
}
enum F {
    X = 'X',
}
let l: F.X;
l = E.X as E.X; // NO

// 2
type O = { a: { b: { c: string } } };
type P = keyof O; // 'a'
type Q = O['a']['b']; // {c: string}
// 3
type Exclusive<T, U> = Exclude<T, U> | Exclude<U, T>;

type R = Exclusive<1 | 2 | 3, 2 | 3 | 4>; // 1 | 4
type U = Exclusive<1 | 2, 2 | 4>;

// 4
let globalCache = {
    get(key: string) {
        return 'user';
    },
};

let userId = fetchUser();
userId.toUpperCase();

function fetchUser() {
    return globalCache.get('userId');
}
