const button = document.createElement('button');
button.innerText = 'click me';

const isAuthorized = false;

//Mediante el return podemos evitar el else
//en algunas funciones
//si esta autorizado acaba con la función
//sino sigue ejecutando

button.addEventListener('click', () => {
    if (isAuthorized) {
        return alert('esta autorizado');
    }

    alert('no esta autorizado');
})

document.body.append(button);