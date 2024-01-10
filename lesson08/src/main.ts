// Generic - sometimes we don't know what type it is
// With generics, we can pass in any type
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  // If non-empty array
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  // If is object and has at least 1 key-value pairs
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  // Otherwise, !! means takes string/number/ and flips it to boolean
  return { arg, is: !!arg };
};

interface boolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): boolCheck<T> => {
  // If non-empty array
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  // If is object and has at least 1 key-value pairs
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  // Otherwise, !! means takes string/number/ and flips it to boolean
  return { value: arg, is: !!arg };
};

interface hasID {
  id: number;
}

const processUser = <T extends hasID>(user: T): T => {
  // process user with logic here
  return user;
};

console.log(processUser({ id: 1, name: "Dave" }));
// console.log(processUser({ name: "Dave" }));

const getUsersProperty = <T extends hasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));

// Generic class
class stateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new stateObject("John");
console.log(store.state);
store.state = "Dave";
// store.state = 12; after we assigned a string, we cannot change it

// But if we initialize with unions, we can change it
const myState = new stateObject<(string | number | boolean)[]>([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);
