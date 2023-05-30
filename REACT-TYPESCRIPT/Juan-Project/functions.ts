import { fnStrToNumber } from './ejemplo';
//type sirve para describir un tipo o crear tipos
//entonces al guardar con una variable por ejemplo un archivo
//podemos asiganrle el tipo dinamicamente

//Minuto -24:04
//https://codigofacilito.com/videos/funciones-parte-1

const miFuncion : fnStrToNumber = (str : string) => {
    return 5;
};

function strToNumber(numero : string){
    return 3;
}


const strToNumber2 = (numero: string):number => {
    return 3;
};

function strToNumber3(number: string):number{
    //... Implementacion Distinta

    return 5;
}


let variable: number = 3;

// let variable:number = 3;

//variables = "asda";
// variables.toLowerCase();

export { strToNumber, strToNumber2 };  