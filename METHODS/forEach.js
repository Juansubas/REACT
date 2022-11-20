import { students } from "./data/data.js";

// for(let i = 0; i < students.length; i++) {
//   console.log(students[i])
// }

// El segundo argumento es el indice
// El tercer argumento es obtener el mismo arreglo que esta recorriendo, sirve para acceder quizás a un dato específico del arreglo.

// students.forEach(function (student, index, students) {
//   console.log(student)
//   console.log(index)
//   console.log(students)
// })

const fullnames = [];

// Con push ingresamo al final del array cada elemento de student
students.forEach((student) => {
  fullnames.push(student.name + " " + student.lastname);
});

console.log(fullnames);