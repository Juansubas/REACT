import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./Services/facts"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'
export function App () {

    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        getRandomFact().then(setFact)
    }, [])

    useEffect(() => {
        if(!fact) return

        const firstWord = fact.split(' ', 1)
        const url = `${CAT_PREFIX_IMAGE_URL}${firstWord}` 
        setImageUrl(url)
        console.log(url)
    }, [fact])

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