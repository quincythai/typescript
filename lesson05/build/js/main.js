"use strict";
// Chapter 5: Assertions
// Assertion -- when you know more about the specificity of an object than TS does
// convert to more or less specific
let a = "hello";
let b = a; // less specific (from type string to type string or number)
let c = a; // more specific (a literal as a is equal to "hello")
// Alternate syntax, but cannot be done in React so thats why use as
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
// Telling compiler, we can ignore the error because we know that it will return a string by using "as string"
let myVal = addOrConcat(2, 2, "concat");
// Be careful because we told TS to see no problem, but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string;
// If you really want to cast, do double casting
10;
// The DOM - Element -> HTMLElement -> HTMLImageElement (specificity)
// ! means we know non-null
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
