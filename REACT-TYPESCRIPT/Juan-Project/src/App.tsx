import {useState } from 'react';
import './App.css'


function App() {

  const [clickPos, setClickPos] = useState({ x: 0, y:0 });

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.namedItem('name');
    const password = e.target.password;

    console.log(name.value, password.value)
  };

  const handleClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
    const backgroundColor = e.currentTarget.style.backgroundColor;
    setClickPos({ x: e.clientX, y: e.clientY})
  };


  return(
    <div className="App" onClick={handleClick}>
      <p>
        {clickPos.x} and {clickPos.y}
      </p>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column'}}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name"/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password"/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );


}

export default App;
