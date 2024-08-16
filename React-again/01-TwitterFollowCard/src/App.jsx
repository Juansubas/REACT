import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  const formatUserName = (userName) => `@${userName}`
  const midudev = { formatUserName, isFollowing: true, userName: 'midudev' }
  const pheralb = { formatUserName, isFollowing: false, userName: 'pheralb' }

  return (
    <section className='app'>
      <TwitterFollowCard {...midudev}>Miguel Angel Duran</TwitterFollowCard>
      <TwitterFollowCard {...pheralb}>Pablo Hernandez</TwitterFollowCard>
    </section>
  )
}

export default App


