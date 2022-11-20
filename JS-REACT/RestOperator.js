// A diferencia del SpreadOperator
// Coge todos los argumentos y los vuelve un array, reduce varios args

//Mientras que el spread operator expande 

// Ejemplo Rest

function sum( firts, ...others) {
    const result = others.reduce( (acc, num) => {
        return acc + num
    })
    return result + firts
}

console.log(sum(1,2,3,4))

let [c, ...rest] = [1,2,3,4,5];

console.log(rest)