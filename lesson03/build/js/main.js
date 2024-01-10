"use strict";
let stringArray = ["one", "hey", "Dave"];
let mixedData = ["EVH", 1984, true];
// Can hover and see what TS infers
// stringArray[0] = 42;
stringArray[0] = "John";
// stringArray.push(42);
stringArray.push("hey");
let guitars = ["Strat", "Les Paul", 5150];
guitars[0] = 1984;
guitars.unshift("Jim");
// guitars.unshift(true);
// stringArray = guitars;
guitars = stringArray;
mixedData = guitars;
// Assignment only works the way based on the range of the types
// any type
let test = [];
let bands = [];
bands.push("Van Halen");
// bands.push(true);
// Normally, type order does not matter, but you can use tuple to enforce types in certain positions
let myTuple = ["Dave", 42, true];
// myTuple[3] = 42;
myTuple[1] = 43;
let mixed = ["John", 1, false];
mixed = myTuple; // Union type accepts all of these
// Will not work because we enforced the positions (mouseover both to see)
// Also, mixed has all 3 types unioned, not necessarily requiring 3 elements, but the tuple requires 3
// myTuple = mixed;
// Objects
let myObj;
// Array is type of object
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
// prop1 must be a string
// prop2 must be a boolean
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
// exampleObj.prop1 = 42;
exampleObj.prop2 = false;
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    active: true,
    albums: ["I", "II", "IV"],
};
// let jp2: Guitarist = {
//   name: "Jimmy",
//   // active: true,
//   albums: ["I", "II", "IV"],
// };
evh = jp;
// Cannot have missing property
// evh = jp2;
// Cannot add property that was not defined
// evh.years = 40;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return `Hello!`;
};
console.log(greetGuitarist(jp));
// When to use interface vs type? Preference; usually use interface for class and works the same as defining an obj
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
