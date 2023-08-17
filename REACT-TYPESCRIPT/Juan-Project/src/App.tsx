import './App.css'
import Polymorphic from './Polymorphic';

//TypeSafety
function App() {

  return(
    <div > 
      <Polymorphic
      as="div" 
      href="https://www.google.com" 
      target= "_blank"
      variant="black"
      >
        Hola
      </Polymorphic>
    </div>
  );
}

export default App;
