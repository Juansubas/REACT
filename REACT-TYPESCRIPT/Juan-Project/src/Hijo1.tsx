import React from "react";
import Hijo2 from "./Hijo2";

type Props = {}

function Hijo1({}: Props){
    return (
        <div style={{ border: '2px solid white', padding: '10px'}}>
            <h2>Hijo1</h2>
            <Hijo2/>
        </div>
    );
}

export default Hijo1;