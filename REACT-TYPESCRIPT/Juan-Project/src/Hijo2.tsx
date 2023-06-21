import React from "react";
import Hijo3 from "./Hijo3";
import { useEdad } from "./EdadContext";

type Props = {}

function Hijo2({}: Props){

    const{edad} = useEdad();

    return(
        <div style={{ border: '2px solid white', padding: '10px'}}>
            <h2>Hijo2</h2>
            <p>{edad}</p>
            <Hijo3/>
        </div>
    );

}

export default Hijo2;