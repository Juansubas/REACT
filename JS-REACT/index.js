const user = {
    name: 'Juan',
    age: 30
}

// Destructuración
// al usar { name }
// lo que hacemos es que extraemos el name
// y podemos usarlo como variable
// ahí le pasamos el objeto user de otra forma tocaría hacer lo siguiente
// const { name } = user
// poner la variable destructurada y de donde sale

function xd( {name} ) {
    return name;
}

console.log(xd(user))