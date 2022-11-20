const names = ['ryan', 'joe', 'maria']
const newName = ['marcos', 'mario', 'john']

// recorrer el array de forma mas "boba"
// Es largo de escribir y complica cosas

// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     console.log(element)
// }

// RECORRE EL ARRAY
// names.forEach(function (name) {
//     console.log(name)
// })

// ESTA FORMA NOS CREA OTRO ARRAY con lo que indiquemos en la function, pero seguimos teniendo el viejo

// const newName = names.map(function (name) {
//     return `Hola señor ${name}`
// })

// console.log(names)
// console.log(newName)

//Ponemos una condición y compara con cada elemento del array
// const nameFound = names.find( (name) => {
//     if (name === 'joe') {
//         return name
//     }
// })

// console.log(nameFound)

// Ponemos una condición para filtrar
// la diferencia del anterior es que nos crea un array con todo lo filtrado

// const newNames = names.filter((name) => {
//     if( name !=='joe' ) {
//         return name
//     }
// })

// console.log(newNames)

//Combinamos dos arreglos

console.log(names.concat(newName)
)