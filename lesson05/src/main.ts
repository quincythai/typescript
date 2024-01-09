// Chapter 5: Assertions
// Assertion -- when you know more about the specificity of an object than TS does

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific (from type string to type string or number)
let c = a as Three; // more specific (a literal as a is equal to "hello")

// Alternate syntax, but cannot be done in React so thats why use as
let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

// Telling compiler, we can ignore the error because we know that it will return a string by using "as string"
let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be careful because we told TS to see no problem, but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string;
// If you really want to cast, do double casting
10 as unknown as string;

// The DOM - Element -> HTMLElement -> HTMLImageElement (specificity)
// ! means we know non-null
const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;


