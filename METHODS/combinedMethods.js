import { students } from "./data/data.js";

const result = students
  .map(({ name, lastname, age }) => ({
    student: `${name} ${lastname}`,
    age,
  }))
  .filter((student) => student.age > 20)
  .sort((a, b) => b.age - a.age)
  .reduce((total, student) => total + student.age, 0);

console.log(result);

//En el reduce ponemos cero debido a que es el parámetro que indica con que valor inicial total.