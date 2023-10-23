import { useEffect, useState } from "react"
import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { getRandomFact } from './services/facts'

const useCatFact = () => {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    useEffect(refreshFact, [])

    return { fact, refreshFact}
} 

export function App () {

    const { fact, refreshFact} = useCatFact();
    const { imageUrl } = useCatImage( {fact} )

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main >
            <h1> App de Gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
            </section>
        </main>
    )
}