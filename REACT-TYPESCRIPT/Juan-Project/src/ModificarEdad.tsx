import React from 'react';

type Props = {
    edad: number;

    //Usar esto da problema a errores peus cualqueir arrow function
    //seria valida y no el useState por eso es mejor indicar
    //el tipo que react provee y podemos copiarlo
    //setEdad: (newEdad: number) => void;
    setEdad: React.Dispatch<React.SetStateAction<number>>;
};

//Aca para recibir los parametros se usa la palabra props
//por lo tanto lo destructuramos {}
function ModificarEdad({edad, setEdad}:Props) {
    return (
        <>
        <input
            type="number"
            value= {edad}
            onChange={e => setEdad(parseInt(e.target.value))}
        />
      <button onClick={() => setEdad(edad + 1)}>Aumentar</button>
        </>
    )
}

export default ModificarEdad