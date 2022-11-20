import { students } from "./data/data.js";

// Este método retorna un nuevo array ordenado.
// First y second, hacen referencia al primer y segundo objeto del arreglo.
// de esa forma va comparando 

// const sortedStudents = students.sort(function (first, second) {
//   if (first.age > second.age) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedStudents = students.sort((a, b) => a.age > b.age ? 1 : -1)

// const sortedPoints = points.sort()
// const sortedPoints = points.sort((a, b) => a > b ? 1 : -1)

const sortedStudents = students.sort((a, b) => a.age - b.age);

// Cuando no le indicamos una funcion, lo ordena alfabeticamente 
//[a,c,b] -> [a,b,c]