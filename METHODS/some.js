import { students } from "./data/data.js";

// Aca no queremos datos, solo queremos validar si existe o no, nos retorna true o false si encuentra alguno.

const result = students.some((student) => student.lastname === "Doe");

console.log(result);