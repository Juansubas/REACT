export type fnStrToNumber = (str: string) => number;

//Definir el tipo pero mediante una interface
interface fnStrToNumber2 {
    (str: string): number,
}

import { strToNumber } from "./functions";

const resultado = strToNumber("hola");