import React from "react";
import { useEdad } from "./EdadContext";

type Props = {}

function Hijo3({}: Props){

    const { edad, setEdad } = useEdad();

    return(
        <div style={{ border: '2px solid white', padding: '10px'}}>
            <h2>Hijo3</h2>
            <p>Edad es {edad}</p>
            <button
            onClick={() => setEdad(edad + 1)}>
                Sumar 1
            </button>
        </div>
    );
}

export default Hijo3;