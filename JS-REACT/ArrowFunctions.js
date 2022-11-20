// Forma típica
function add(x, y) {
    return x + y
}

// Arrow function
const add = (x, y) => {
    return x + y
}

// INLINE ARROW FUNCTIONS
//Si no ponemos llave en una sola línea
//JS entiende que es return

// Si solo tuvieramos un argumento

const xd = x => { return 10 + x}

// Return implicito

const loco = x => console.log(x)

// Problem al retornar un objeto por el {}
// Por ejemplo lo siguiente marca undefined porque cree que el cuerpo de la funcion
//const showObject = () => {name: "ryan"}

//Esto se soluciona poniendose entre paréntesis

const showObject = () => ({name: "Ryan"})

//MINUTO 40:34