//Biblioteca que viene con JS y no con react
//Permite obtener datos de un URL
//Esto permite la asincronía que es para ejecutar código mientras hay respuesta.

// COn then manejamos el resultado de la promesa cuando obtenga respuesta
const ul = document.createElement('ul')


// let data = fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response)=>{
//     return response.json()
// })
// .then( (data) => {
//     console.log(data);
//     data.forEach( (post) => {
//         const li = document.createElement("li");
//         li.innerText = post.title;
//         ul.append(li)
//     });
//     document.body.append(ul);
// }
// );

console.log("linea dos")

// Forma más fácil de usar las promesas con Async Await
// Esto equivale a lo de arriba

async function loadData() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    const data = await response.json();
    console.log(data)
    data.forEach( (post) => {
        const li = document.createElement("li");
        li.innerText = post.title;
        ul.append(li)
    });
    document.body.append(ul);

}

loadData();

console.log('linea 2')