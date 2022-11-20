// FUntcion normal

function start() {
    return 'Starting...'
}

console.log(start());

// Other way
// Al poner la function y () la crea y la llama al mismo tiempo.
//Aquí vemos la function anónima sin nombre

console.log(function () {
    return 'Starting...'
}())

// Ahora sí una forma mas específica anonimamente

const button = document.createElement('button')
button.innerText = 'Click me'

button.addEventListener('Click', function () {
    alert( 'clicked' )
})