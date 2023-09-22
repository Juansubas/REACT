import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      
      <TwitterFollowCard isFollowing userName="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing={false} userName="pheralb">      
        Pablo Hernandez
      </TwitterFollowCard>

    </section>
  );
}
