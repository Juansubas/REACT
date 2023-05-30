/* Codigo js vs codigo ts

let variable = "hola";
let variable2 = 2023;
let variable3 = true;
let variable4 = null;
let variable5 = undefined;
let variable6 = [];
let variable7 = {};

*/


//Replicando lo anterior en ts

let variable : string = "hola";
let variable2 : number = 2023;
let variable3 : boolean = true;
let variable4 : null = null;
let variable5 : undefined = undefined;
let variable6 : [] = [];
let variable7 : number[] = [2,3];
let variable8 : string[] = ["a", "2"];
let variable9 : boolean[] = [true, false];
//Esto es lo mismo que la variable 8 
let variable10 : Array<string> = ["a", "2"];
// Otra forma para almacenar diferentes valores
let variable11 : (string | number)[] = ["a", 1];
// podemos llevar un patron proporcionado si no queremos hacerlo
// 1 string 1 number 1 boolean, podemos hacer 2 -2-2 etc
let variable12 : (string | number | boolean)[] = ["a", "ola", 5, 4, true, false];
//Uso de genericos
function miFuncion<T>(elementos: T[]): void {
    let variable13: T[] = [];
    // Resto del código...
  }

//any es peligroso pues permite todo y puede ocasionar problemas
//como los que hablamos anteriormente en las funciones de map y 
//lowercase
let variable13 : any[] = ["xd", null, undefined, "xd"]
let variable14: any = [] 
let variable15 = {};

/** toFixed transforma un numero con decimales, retorna un string 
 * con el resultado
let numero1 = 10.12345;
let numero2 = 5.678;

console.log(numero1.toFixed(2)); // Resultado: "10.12"
console.log(numero2.toFixed(1)); // Resultado: "5.7"
 */

console.log(variable8);
variable8.map(n=>{
    n.toLowerCase()
});