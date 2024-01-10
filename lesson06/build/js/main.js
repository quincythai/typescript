"use strict";
// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;
//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }
// Visibility modifiers will allow us to remove the declaration on the top
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        // No longer needed, but optionally can put
        // this.name = name;
        // this.music = music;
        // this.age = age;
        // this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
// Providing default value will allow you to skip providing that argument
const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);
// private -- only accessible within its class
// protected -- '' and subclasses
