// Utility types

// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "final project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Required and readonly

// Utility type Required means that you need all the properties
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// assignVerified.grade = 88;
// recordAssignment(assignGraded);
recordAssignment({ ...assignGraded, verified: true });

// Record - keys: strings, values: strings
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";
const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
};

// Pick and Omit
// Pick -- specify what properties are required
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

// Omit -- specify what properties we can omit
type AssignPreview = Omit<Assignment, "grade" | "verified">;
const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and Extract (hover over these types)

// Everything except U
type adjustedGrade = Exclude<LetterGrades, "U">;

// highGrades is now only A and B
type highGrades = Extract<LetterGrades, "A" | "B">;

// Nonnullable
type AllPossibleGrades = "Dave" | "John" | null | undefined;

// take out null and undefined
type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType

// type newAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

// Useful because we can derive a type from a function
// We use Utility class ReturnType and pass in the typeof the function, which we can assign as a type
type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>;

// Notice this is a tuple
const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited helps us with ReturnType of a Promise
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

// Originally would return promises if only return type, now we wrap it with awaited to get the Users[]
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
