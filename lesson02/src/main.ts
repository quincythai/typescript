let myName: string = "Dave";
// myName = 42;

let myName2: string;
myName2 = "John";

let meaningOfLife: number;
let isLoading: boolean;
meaningOfLife = 42;
isLoading = true;

let album: any;
album = "Van Halen";
album = 1984;
album = true;

// String or number
let thing: string | number;
thing = "album";
thing = 42;
// thing = true;

// Implicitly any type if not provided
// Implicitly infer return type (hover)
const sum = (a: number, b: number) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean | string;

// Regular expression
let re: RegExp = /\w+/g;
