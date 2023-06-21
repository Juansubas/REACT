import { useRef, useState } from 'react';

import './App.css'


function App() {
  const [edad, setEdad] = useState<number>(0);
  const ref1 = useRef<HTMLDivElement>(null);

  return(
    <div className="App">
      <div ref={ref1}>Div 1</div>
      <button
        onClick={() => {
          if (ref1.current) {
            ref1.current.style.backgroundColor = 'red';
          }
        }}
      >
        Cambiar fondo 1 
      </button>
    </div>
  );


}

export default App;
