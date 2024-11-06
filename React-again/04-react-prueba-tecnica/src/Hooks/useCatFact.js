import { useEffect, useState } from "react";
import getRandomFact from "../services/fact";

function useCatFact() {

    const [fact, setFact] = useState("");

    const fetchFact = async () => {
        const response = await getRandomFact();
        setFact(response);
      };

    useEffect(() => {
        fetchFact();
      }, []);

  return { fact, fetchFact };
}

export default useCatFact