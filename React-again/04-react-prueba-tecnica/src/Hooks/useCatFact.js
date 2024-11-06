import { useEffect, useState } from "react";
import getRandomFact from "../services/fact";

function useCatFact() {

    const [fact, setFact] = useState("");

    useEffect(() => {
        const fetchFact = async () => {
          const response = await getRandomFact();
          setFact(response);
        };
    
        fetchFact();
      }, []);

  return { fact };
}

export default useCatFact