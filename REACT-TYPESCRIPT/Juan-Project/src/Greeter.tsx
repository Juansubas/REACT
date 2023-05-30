
//con interface o type sirve pero mientras escribimos codigo 
//con PropTypes se valida en runtime o sea cuando la aplicacion se ejecuta
//Pero ojo lo mas usado es interface y ya, esto seria cosa del proyecto que nos pidan
//pues proptypes es limitado pues solo maneja primitivos.
import PropTypes from 'prop-types';

// type Props = {
//     nombre:string;
//     edad: number;
// }

interface Props {
    nombre:string;
    edad: number;
    //children: Element; Element sirve para lagunas cosas
    //cuando no entonces usamos esto:
    children?: JSX.Element;
    // o children: React.ReactNode;
}

//Con destructuracion

/**
 * 
 * Tambien podemos poner el type directamente remplazando donde dice Props para aprovechar la destructuracion
 * const Greeter = ({ nombre, edad}: {nombre:string; edad:number}) 
 */
const Greeter = ({ nombre, edad, children}: Props) => {
    //...

    const edadMejorada = edad.toFixed();

    return(
        <div>
            <p>Hola {nombre} tienes {edad} de edad</p>
            {children}
        </div>
    );    
};

Greeter.propTypes = {
    name: PropTypes.string.isRequired,
    edad: PropTypes.number,
    children: PropTypes.element,
};

export default Greeter;

