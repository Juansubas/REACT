import { useEffect, useState } from "react"
import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { getRandomFact } from './services/facts'

export function App () {

    const [fact, setFact] = useState()
    const { imageUrl } = useCatImage( {fact} )

    useEffect(() => {
        getRandomFact().then(newFact => setFact(newFact))
    }, [])

    const handleClick = async () => {
        const newFact = await getRandomFact()
        setFact(newFact)
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