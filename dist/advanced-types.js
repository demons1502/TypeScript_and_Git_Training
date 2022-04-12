"use strict";
var _a;
class Car {
    drive() {
        console.log('Drivingggggg....');
    }
}
class Truck {
    drive() {
        console.log('Drivingggggg.... from Truck');
    }
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
const a1 = {
    email: 'Not a valid email!',
    password: 'Must start with a capital character',
};
console.log(a1);
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = undefined;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Max', 1);
result.split(' ');
console.log('Result: ' + result);
let a;
a = 1;
let b;
let c;
c = 'foo';
let d;
let e;
e = [1];
console.log(e);
//# sourceMappingURL=advanced-types.js.map