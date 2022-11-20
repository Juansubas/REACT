// Manipulating DOM
// Sería manipular desde JavaScript el document html

//Create Elements Html
const title = document.createElement('h1')
//Insertar adentro de la etiqueta h1
title.innerText = 'Hola Mundo desde Js'


//Creando un boton

const button = document.createElement('button')
button.innerText = 'click'

//Event handlers o Escuchas

button.addEventListener('click', function () {
    console.log("Hola mundo")
    //Enviando una alerta
    alert("Se presionó un clik")
    //Modificando el titulo
    title.innerText = 'Texto Actualizado con Js'
})

//Insert Element in body
document.body.append(title)
document.body.append(button)
