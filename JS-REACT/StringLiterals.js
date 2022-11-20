const background = 'yellow'
const color = 'white'
const isAuthorized = true;

const button = document.createElement('button');
button.innerText = 'click me';
button.style = `background: ${background}; color: ${color}`
button.style = `background: ${isAuthorized ? 'red': background}; color: ${color}`



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