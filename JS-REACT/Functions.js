function hello() {
    console.log('Hola Mundo')
}

function hi() {
    return "Hello"
}

function Object() {
    return {name: "Juan"};
}
function Array() {
    return []
}

function functio() {
    return function(){
        return "Hola mundo"
    }
}

function add(x, y) {
    return x + y
}

function subtract(x, y=0){
    return x + y
}

console.log(add(4, 5))

console.log(functio()())