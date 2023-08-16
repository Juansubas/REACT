// Extension de tipos

// Tipo a extender Error

// interface CustomError extends Error {
//     code: number;
// }
// type CustomErrorType = Error & {
//     code: number;
// };


// class NewError implements CustomError {
//     code: number;
//     name: string;
//     message: string;
//     constructor(code: number, message: string){
//         this.code = code;
//         this.message = message;
//         this.name = 'NewError';
//     }
// }

// class NewErrorType implements CustomErrorType {
//     code: number;
//     name: string;
//     message: string;
//     constructor(code: number, message: string){
//         this.code = code;
//         this.message = message;
//         this.name = 'NewError';
//     }
// }

type Aguila = {
    nombre: sttring;
    volar: () => void;
};

interface Perro {
    nombre: string;
    ladrar: () => void;
}

// Dif 1
type animal2 = Aguila & Perro;
type animal = Aguila | Perro;

//We can mix de types .
// function moverAnimal(animal: animal) {
//     animal.name;
// }

// Type of elementos inside array useful for tuples.
type animalTuple = [Aguila, Perro];

// Dif 1.1

//When you hover over the 'type' keyword, VS Code shows me the definition and in the case 
// of the interface, it shows me a little bit .

// Dif 2 Interfaces

//Interface Merging
// If you have two interfaces with the same name, they merge

interface Dog {
    name: string;
    bark: () => void
}

interface Dog {
    age: number;
}

const hachi: Dog = {
    name: 'Hachi',
    bark: () => console.log("boof"),
    age: 2,
}