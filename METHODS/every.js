import { students } from "./data/data.js";


// Acá compara si o si todos los objetos y si todos cumplen la condición returna true o false respectivamente
// Con include recorre el string buscando la letra o conjunto de letras

const result = students.every((student) => student.name.includes("J"));

console.log(result);