import {useState, useRef, useMemo, useCallback } from 'react';
import './App.css'
import Child from './Child';

function App() {

  const [age, setAge] = useState(1);
  const ciclosTotales = useRef(1_000_000_000);

  const multiplyAge = () => {
    setAge(prev => prev * 2);
  };

  const expensiveInitialState = () => {
    for (let i = 0; i < ciclosTotales.current; i++) {}
    console.log('value recalculated');
    return ciclosTotales.current;
  };

  const valor = useMemo(expensiveInitialState, [ciclosTotales.current]);

  return(
    <div className="App">
      <p>
        {age} and {valor}
      </p>
      <Child multiplyAge={multiplyAge}/>
    </div>
  );


}

export default App;
