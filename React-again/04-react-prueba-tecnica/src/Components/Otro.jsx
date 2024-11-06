import useCatFact from "../Hooks/useCatFact"
import useCatImage from "../Hooks/useCatImage"

const Otro = () => {
    const { fact }  = useCatFact();
    const { imageUrl } = useCatImage({fact});
  return (
    <div>
        <h1>Bienvenido al generador de texto e imagenes</h1>
        <p>{fact || "Loading..."}</p>
        {imageUrl && <img src={imageUrl} alt="Cat Fact" />}
    </div>
  )
}

export default Otro;