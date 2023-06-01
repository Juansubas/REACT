//import { useState } from 'react'
import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter';
import ModificarEdad from './ModificarEdad';

function App() {
  const [edad, setEdad] = useState<number>(0);

  return(
    <div className="App">
      <p>{edad}</p>
      <ModificarEdad
        edad={edad}
        setEdad={setEdad}
      />
    </div>
  );


  //Usando un componente Llamado Greeter y se le pasan
  //Propiedad como nombre, edad y un hijo que es lo que esta adentro
  // return (
  //   <>
  //     <Greeter nombre="Adrian" edad={27}>
  //       <div>Hola, soy el hijo</div>
  //     </Greeter>
  //   </>
  // )
}

export default App;
