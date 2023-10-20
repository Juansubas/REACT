import { useEffect, useState } from "react"
import { getImageUrl } from '../services/images'

export function useCatImage( { fact } ) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if(!fact) return

        const newImageUrl = getImageUrl(fact)
        setImageUrl(newImageUrl)
    }, [fact])

    return { imageUrl  }
}
