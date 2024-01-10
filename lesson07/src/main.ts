// Index signatures: used when we want to access properties of an object, but we don't yet know their names
// See transactionObj, it maps strings to numbers (key -> value)

// index signature to put other properties on top of the required pizza, books, job
interface transactionObj {
  readonly [index: string]: number;
  pizza: number;
  books: number;
  job: number;
}

// readonly means properties are const
// interface transactionObj {
//   readonly [index: string]: number;
// }

const todaysTransactions: transactionObj = {
  pizza: -10,
  books: -5,
  job: 50,
  Dave: 42, // not required, but must match the index signature types (key -> value)
};

console.log(todaysTransactions.pizza);
console.log(todaysTransactions["pizza"]);

let prop: string = "pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: transactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));
// todaysTransactions.pizza = 40;
// does not work because we use readonly on the index signature

console.log(todaysTransactions["Dave"]);
// TS shows no errors, but this does not exist and returns undefined

////

// provide undefined for optional parameters
// index signature requires return type of all possible types of the defined variables
interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

console.log(student.test);

// keyof assertion allows us to still iterate through all pairs of the Student object without the index signature existing
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

// if we don't know the type of the object, use "typeof variableName"
Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");
logStudentKey(student, "name");
////

// So we can't put literal types as keys, so we need to use Record utility type and use our type that defines the literals

// interface Incomes {
//   [key: string]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

// Record utility type
type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

// Notice the difference is that we get keyOf the type (we still need assertion)
for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
