const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export const getImageUrl = (fact) => {

    const firstWord = fact.split(' ', 1)
    const url = `${CAT_PREFIX_IMAGE_URL}${firstWord}` 

    return url
}