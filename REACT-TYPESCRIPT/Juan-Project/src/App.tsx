import {MouseEventHandler, useState } from 'react';
import './App.css'

//Formas de indicar tipos

// (a:string) => void ;  React.Dispatch<React.SetStateAction<string>>
// HTMLElement => HTMLInputElement
// string => "name" | "password"
// React.SyntheticEvent  React.mouseEvent => React.MouseEvent<HtmlDivElement>

//Algunos Eventos

// AnimationEvent => React.AnimationEvent<HTMLDivElement>
// ChangeEvent => React.ChangeEvent<HTMLInputElement>
// ClipboardEvent => React.ClipboardEvent<HTMLDivElement>
// CompositionEvent => React.CompositionEvent<HTMLDivElement>
// DragEvent => React.DragEvent<HTMLDivElement>
// FocuEvent => React.FocusEvent<HTMLDivElement>
// FormEvent => React.FormEvent<HTMLFormElement>
// KeyboardEvent => React.KeyboardEvent<HTMLDivElement>
// MouseEvent => React.MouseEvent<HTMLDivElement>
// PointerEvent => React.PointerEvent<HtmlDivElement>
// TouchEvent => React.TouchEvent<HTMLDivElement>
// TransitionEvent => React.TransitionEvent<HTMLDivElement>

// El sintetico es como un any de los eventos
// SyntheticEvent => React.SyntheticEvent<HTMLDivElement>

function App() {

  const [clickPos, setClickPos] = useState({ x: 0, y:0 });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value : string};
      password: { value : string}
    };

    const name = e.currentTarget.elements.namedItem('name') as HTMLInputElement;
    const password = target.password;

    console.log(name.value, password.value)
  };

  const handleClick: React.MouseEventHandler<HTMLDivElement> = e =>{
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
