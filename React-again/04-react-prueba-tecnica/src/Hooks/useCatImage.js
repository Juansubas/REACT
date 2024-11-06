import { useEffect, useState } from "react";
import getImage from "../services/image";

function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ")[0];

    const handleImage = async () => {
      const response  = await getImage({ firstWord });  
      setImageUrl(response);
    };

    handleImage();

  }, [fact]);

  return { imageUrl: imageUrl };
}

export default useCatImage;
