//import { useState } from 'react'
import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeter nombre="Adrian" edad={27}>
        <div>Hola, soy el hijo</div>
      </Greeter>
    </>
  )
}

export default App;
