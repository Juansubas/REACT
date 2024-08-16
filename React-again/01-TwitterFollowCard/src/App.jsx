import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          src="https://unavatar.io/midudev" 
          alt="El avatar de Midudev" 
        />
        <div className='tw-followCard-info'>
          <strong>Miguel Angel Duran</strong>
          <span className='tw-followCard-infoUserName'>@Midudev</span>
        </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}

export default App
