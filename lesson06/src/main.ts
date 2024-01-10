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
  // Assertion -- we are asserting that we know what we are doing and not initializing it right away
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    // No longer needed, but optionally can put
    // this.name = name;
    // this.music = music;
    // this.age = age;
    // this.lang = lang;
  }

  public getAge() {
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

// Recall that TS will still compile the JS even if TS does not like it

// lang is an attribute with a default value, we do not need to pass it to subclass because it extends Coder
// Subclass must call super with all of Coder's attributes before assigning any of its own specific attributes
class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const sara = new WebDev("Mac", "Sarah", "Lofi", 25);
console.log(sara.getLang());
// console.log(sara.age);
// console.log(sara.lang);
// lang is protected and WebDev is a subclass, but we can only access this variable within the WebDev subclass

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  // name: number (does not work because needs to match up with interface)
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const gilgamesh = new Guitarist("Gilgamesh", "guitar");
console.log(gilgamesh.play("strum"));

////
class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count; // since static is count, we use Class name (count is specific to the entire class and not some instance)
  }
  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count; // pre-increment makes the id 1 on the first instantiation
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.getCount);

console.log(Steve.id);

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const myBands = new Bands();
myBands.data = ["Neil Young", "Led Zep"];
console.log(myBands.data);
myBands.data = [...myBands.data, "ZZ Top"];
// myBands.data = "Van Halen";
myBands.data = ["Van Halen", 5150];
