import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  const formatUserName = (userName) => `@${userName}`

  return (
    <div className='app'>
      <TwitterFollowCard 
        formatUserName={formatUserName} 
        isFollowing 
        name='Miguel Angel Duran' 
        userName='midudev'
      /> 
      <TwitterFollowCard 
        formatUserName={formatUserName} 
        isFollowing={false} 
        name='Pablo Hernandez' 
        userName='pheralb'
      /> 
      <TwitterFollowCard 
        formatUserName={formatUserName} 
        isFollowing 
        name='Elon Musk' 
        userName='elonmusk'
      /> 
      <TwitterFollowCard 
        formatUserName={formatUserName} 
        isFollowing 
        name='vxnder' 
        userName='VanderHeart'
      /> 
    </div>
  )
}

export default App
