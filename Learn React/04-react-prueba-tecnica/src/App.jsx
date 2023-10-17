import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'
export function App () {

    const [fact, setFact] = useState('lorem ipsum cat fact whatever')
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            setFact(fact)

            const firstWord = fact.split(' ', 1)
            const url = `${CAT_PREFIX_IMAGE_URL}${firstWord}` 

            setImageUrl(url)
        })
    }, [])

    return (
        <main style={{display: 'flex', flexDirection: 'column', placeItems: 'center'}}>
            <h1> App de Gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
        </main>
    )
}