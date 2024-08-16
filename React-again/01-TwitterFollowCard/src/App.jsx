import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  const formatUserName = (userName) => `@${userName}`

  return (
    <div className='app'>
      <TwitterFollowCard 
        formatUserName={formatUserName} 
        isFollowing 
        userName='midudev'
      > 
        Miguel Angel Duran
      </TwitterFollowCard> 
      <TwitterFollowCard 
        formatUserName={formatUserName} 
        isFollowing={false} 
        userName='pheralb'
      > 
        Pablo Hernandez
      </TwitterFollowCard>
    </div>
  )
}

export default App
