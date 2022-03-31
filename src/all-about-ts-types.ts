// Number, String and Boolean
function add(a: number, b: number, showResult: boolean, text: string): any {
    const result = a + b;
    if (showResult) {
        console.log(text + result);
    } else {
        return result;
    }
}

add(4, 5, true, 'Result is : ');

//Object
//Enums
enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 100,
    AUTHOR = 'AUTHOR',
}

const person: {
    name: string;
    age: number;
    role: Role;
    married?: boolean; //optional property
} = {
    // const person = {
    name: 'Hau Nguyen',
    age: 20,
    role: Role.ADMIN,
};
console.log(`${person.name} and ${person.age}`);

//Array
const person1 = {
    name: 'Hau Nguyen',
    age: 20,
    hobbies: ['Sports', 'Codding'],
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person1.name);
for (const hobby of person1.hobbies) {
    console.log(hobby.toUpperCase());
}

//Tuples
let a: [string, number, boolean] = ['Hau Nguyen', 20, true];
// a = ['Hau Nguyen', 20, true, 123123]; Type '[string, number, true, number]' is not assignable to type '[string, number, boolean]'.Source has 4 element(s) but target allows only 3

//Type aliases
type Age = number;

type Student = {
    name: string;
    age: Age;
};

let student1: Student = {
    name: 'Hau',
    age: 20,
};

//Union and intersection
type Cat = {
    name: string;
    purrs: boolean;
};
type Dog = {
    name: string;
    barks: boolean;
    wags: boolean;
};
type CatOrDogOrBoth = Cat | Dog;
type CatAndDog = Cat & Dog;

// Cat
let animal1: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true,
};

// Dog
animal1 = {
    name: 'Domino',
    barks: true,
    wags: true,
};

// Both
animal1 = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true,
};

let animal2: CatAndDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true,
};

// Any
let a1: any = 666; // any
let b1: any = ['danger']; // any
let c1 = a1 + b1; // any

//Unknown
let a2: unknown = 30; // unknown
let b2 = a2 === 123; // boolean
//let c2 = a2 + 10              // Error TS2571: Object is of type 'unknown'.
if (typeof a2 === 'number') {
    let d2 = a2 + 10; // number
    console.log(d2);
}

// EXERCISE
// 1a
let aa = 1042; //number
// 1b
let bb = 'apples and oranges'; //string
// 1c
const c = 'pineapples'; // 'pineapples'
// 1d
let d = [true, true, false]; // boolean[]
// 1e
let e = { type: 'ficus' }; // {type: string}
// 1f
let f = [1, false]; // (number | boolean)[]
// 1g
const g = [3]; // number[]
// 1h
let h = null; // any

// 2a
let i: 3 = 3;
i = 4; // Error TS2322: Type '4' is not assignable to type '3'.

/*
i's type is the type literal 3. The type of 4 is the type literal 4, which is not assignable to the type literal 3.
*/

// 2b
let j = [1, 2, 3];
j.push(4);
j.push('5'); // Error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.

/*
Since j was initialized with a set of numbers, TypeScript inferred j's type as number[].
The type of '5' is the type literal '5', which is not assignable to number.
*/

// 2c
let k: never = 4; // Error TS2322: Type '4' is not assignable to type 'never'.

/*
never is the bottom type. That means it's assignable to every other type, but no type is
assignable to never.
*/

// 2d
let l: unknown = 4;
let m = l * 2; // Error TS2571: Object is of type 'unknown'.

//fix
if (typeof l === 'number') {
    m = l * 2;
}

/*
unknown represent a value that could be anything at runtime. To prove to TypeScript that what
you're doing is safe, you have to first prove to TypeScript that a value of type unknown actually
has a more specific subtype. You do that by refining the value using typeof, instanceof, or
another type query or type guard.
*/
