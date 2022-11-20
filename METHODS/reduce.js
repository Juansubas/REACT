import { students } from "./data/data.js";

// let total = 0;
// for (let i = 0; i < points.length; i++) {
//   total += points[i];
// }

// const total = points.reduce((total, point) => {
//   return total + point;
// }, 0);

const total = points.reduce((total, point) => total + point, 0);

const totalAges = students.reduce((total, student) => total + student.age, 0);

totalAges;

const developers = [
  {
    id: 1,
    name: "John",
    skills: ["HTML", "React", "Javascript", "Java"],
  },
  {
    id: 2,
    name: "Jane",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
  {
    id: 3,
    name: "Jack",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
];

// Al principio reduce hace que guarde un acumulador y una variable que se reinicia cada iteración, por lo tanto estamos guardando toadas las allskill y la de cada estudiante  particularmente

// Para evitar que se repitan dantos con el [...allskills, ...student.skills], pues estamos poniendo todos los elementos del acumulador y del estudiante en un arreglo

//Esto se soluciona con un conjunto o sea set, pues los conjuntos no se pueden repetir
// set([...allskills], ...student.skills])

//Ahora bien esto nos quedó como conjunto y necesitamos transformalo así que usamos Array.from(new set([...allskills], ...student.skills]) )

//Copia los elementos en un arreglo, los pasa por un set y luego los transforma a un arreglo 

const result = developers.reduce(function (allSkills, student) {
  return Array.from(new Set([...allSkills, ...student.skills]));
}, []);

console.log(result);

// let total = 0

// for (let i = 0; i < students.length; i++) {
//   total += students[i].age
// }

// console.log(total)

// const result = students.reduce((total, student) => total + student.age, 0)

// console.log(result)