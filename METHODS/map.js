import { students } from "./data/data.js";

// const studentNames = students.map(function (student) {
//   return {
//     fullname: `${student.name} ${student.lastname}`,
//   }
// })

// const studentCourses =  students.map(function (student) {
//   return {
//     course: "Programming"
//   }
// })

// const studentNames = students.map((student) => {
//   return {
//     fullname: `${student.name} ${student.lastname}`,
//   };
// });

// const doubleAges = students.map((student) => student.age).map((age) => age * 2);

// const studentsInfo = students.map((student) =>  {
//   return {
//     fullname: `${student.name} ${student.lastname}`,
//     age: student.age
//   };
// });

// const texts = studentsInfo.map((student) =>  {
//   return `${student.fullname} is ${student.age} years old`;
// })

// const texts = students
//   .map((student) => ({
//     fullName: `${student.name} ${student.lastname}`,
//     age: student.age,
//   }))
//   .map((student) => `${student.fullName} is ${student.age} years old`);

// const fullnames = students.map(function (student) {
//     return student.name + ' ' + student.lastname;
// })

//Con el spread operador, lo que hacemos es agregar todo el objeto studen y una propiedad nueva que es course y luego ese nuevo arreglo que agrege la propiedad age y le multiplique la edad actual * 2
const doubleage = students
  .map((student) => ({
    ...student,
    course: "Programming",
  }))
  .map((student) => ({ ...student, age: student.age * 2 }));

console.log(doubleage);