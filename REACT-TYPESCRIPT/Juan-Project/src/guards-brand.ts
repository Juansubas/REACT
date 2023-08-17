interface Square {
    size: number;
    color: string;
    name: 'square';
}

interface Circle{
    radius: number;
    color: string;
    name: 'circle';
}

interface Triangle {
    size: number;
    color: string;
    height: number;
    name: 'triangle';
}

type Shape = Square | Circle | Triangle;

// type guarding/narrowing

// //This is not real scenario
// function getArea(shape: Shape) {
//     if(shape.name === 'square'){
//         return shape.size * shape.size;
//     } else if (shape.name === 'circle'){
//         return Math.PI * shape.radius ** 2;
//     } else {
//         return shape.size * shape.height;
//     }
// }

function getArea(shape: Shape) {
    // Square | Circle | Triangle

    if("size" in shape) {
    // Square | Triangle

        if("height" in shape){
            //Triangle
            return shape.size * shape.height / 2;
        }
    } else {
        // Circle
        return Math.PI * shape.radius * shape.radius;
    }
}


// Type Branding

const humanSpecies = Symbol('human');
const animalSpecies = Symbol('animal');

interface Human {
    name: string;
    species: typeof humanSpecies
}

interface Animal {
    name: string;
    species: typeof animalSpecies;
}

interface Cosa {
    age: number;
}

function printHuman(human: Human) {
    console.log(human.name);
}

const cosa: Cosa = {
    age: 20,
}

const pedrito: Human = {
    name: 'Pedro',
    species: humanSpecies,
}

const perro: Animal = {
    name: 'Firulais',
    species: animalSpecies,
}

printHuman(pedrito);
// printHuman(llaves);
// printHuman(perro);