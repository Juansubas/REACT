import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(()=>{
    console.log('efecto')

    const handleMove = (event) => {
      console.log(event)
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY})
      setPosition( { x: clientX, y: clientY } )
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup 
    // cuando el componente se desmonta 
    // cambia las dependencias antes de ejecutar 
    // el efecto de nuevo 
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
        }}
      >
      </div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
