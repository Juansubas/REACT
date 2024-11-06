import useCatFact from "../Hooks/useCatFact"
import useCatImage from "../Hooks/useCatImage"

const Otro = () => {
    const { fact, fetchFact }  = useCatFact();
    const { imageUrl } = useCatImage({fact});
  return (
    <div>

        <h1>Bienvenido al generador de texto e imagenes</h1>
        <button onClick={() => fetchFact()}>Refrescar</button>
        <p>{fact || "Loading..."}</p>
        {imageUrl && <img src={imageUrl} alt="Cat Fact" />}
    </div>
  )
}

export default Otro;