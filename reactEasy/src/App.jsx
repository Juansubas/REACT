import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const {name, setName} = useState('midudev')
  return (
    <section className="App">

      <TwitterFollowCard isFollowing userName={name}>
        Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing={false} userName="pheralb">      
        Pablo Hernandez
      </TwitterFollowCard>

      <button onClick={() => setName('pedronichel')}>
        Cambio Nombre
      </button>

    </section>
  );
}
