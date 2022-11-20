// //Con ... podemos traer todos los elementos de un arreglo

// const names = ['ryan', 'joe', 'maria']
// const newNames = ['marcos', 'mario', 'john']

// console.log([...names, ...newNames])

const user = {
    name: "ryan",
    lastname: 'ray'
}

const address = {
    street: 'main street 123',
    city: 'bogota'
}

const userInfo = {
    ...user,
    ...address
}

console.log(userInfo)