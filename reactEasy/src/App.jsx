import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <div className="App">
        <TwitterFollowCard userName="midudev" name="Miguel Angel Duran"/>
        <TwitterFollowCard userName="pheralb" name="Pablo Hernandez"/>
        <TwitterFollowCard userName="elonmusk" name="Elon Musk"/>
        <TwitterFollowCard userName="vxnder" name="Vanderhart"/>
    </div>
  )  
}
