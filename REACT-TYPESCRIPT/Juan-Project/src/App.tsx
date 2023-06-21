//import { useState } from 'react'
import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter';
import ModificarEdad from './ModificarEdad';
import Hijo1  from './Hijo1';
import { EdadProvider } from './EdadContext';

function App() {
  const [edad, setEdad] = useState<number>(0);

  return(
    <div className="App">
      <EdadProvider>
        <Hijo1></Hijo1>
      </EdadProvider>
    </div>
  );


}

export default App;
