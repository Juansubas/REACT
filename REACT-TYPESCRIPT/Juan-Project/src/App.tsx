import { useRef, useState, useReducer } from 'react';

import './App.css'


function App() {

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment' :
        return { ...state, age: state.age + 1};
      case 'decrement' :
        return { ...state, age: state.age - 1};
      case 'reset' :
        return { ...state, age: 20};
      default:
        return state;
    }
  };

  const [person, dispatch] = useReducer(reducer, {name:'John', age: 20});

  return(
    <div className="App">
      <h1>Edad: {person.age}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );


}

export default App;
