import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <div className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="midudev"
        name="Miguel Angel Duran"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="pheralb"
        name="Pablo Hernandez"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="elonmusk"
        name="Elon Musk"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="vxnder"
        name="Vanderhart"
      />
    </div>
  );
}
