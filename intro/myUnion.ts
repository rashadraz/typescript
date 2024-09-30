let score: number | string = 33;

score = "345";
score = 54;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "hitesh", id: 334 };

hitesh = { username: "admin", id: 334 };

function getDbId(id: number | string) {
  console.log(`Db id is ${id}`);
}

// array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3", "4"];
const data3: (string | number | boolean)[] = [1, 2, 3, "4"];

export {};
