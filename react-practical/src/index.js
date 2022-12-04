import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Post } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [ mensaje, setMensaje ] = useState('');

  const [ count, setCount] = useState(0);

  useEffect(function() {
    console.log('render')
  }, [ count ])

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)}/>
      <button onClick={() => {
        alert( `El mensajes es: ${mensaje}`)
      }}>
        Save
      </button>

      <hr/>

      <h1>Counter: {count}</h1>
      <button onClick={ () => {
        setCount( count + 1)
      }}>
        Incrementar
      </button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
