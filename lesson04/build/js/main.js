"use strict";
// Interface -- objects/classes, whereas type is more of an alias to assign to objects
// interface postID = stringOrNumber;
// Literal type -- only specific values, like const
let myName;
// Only possible to set name to "Dave"
// myName = "John";
myName = "Dave";
let userName;
userName = "Amy";
// Functions -- explicitly define input and output type
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
// logMsg(add("a", 3)); does not work because "a" type string
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
// multiply is of type mathFunction and mathFunction is defined as a type to intake 2 numbers and output a number
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// Optional parameters -- optional one must be the last in the list
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// c has default value and will never be undefined
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));
// Have to define as undefined to skip over a and get the default value otherwise it would've made a = 3
// Note: default values will not work with alias type
// Rest parameters
// Rest operator comes at end
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2));
logMsg(total(10, 2, 3));
// never type is for functions that throw errors or infinite loop
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// Endless loop
// Now void with break statement
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// Custom type guard
// typeof checks the type and the type must be as a string
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// Use of the never type
// Type guards to check value, but TS will need the explicit return, which we will put as never type by returning an error
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen");
};
