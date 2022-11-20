import { students } from "./data/data.js";

// Encontramos el arreglo que tenga el nombre Ryan
const result = students.find((student) => student.name === "Ryan");

console.log(result);