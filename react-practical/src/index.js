import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Post } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [ mensaje, setMensaje ] = useState('');

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)}/>
      <button onClick={() => {
        alert( `El mensajes es: ${mensaje}`)
      }}>
        Save
      </button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
