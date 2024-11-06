import { URLS } from "../enums/CONSTANTS.JS";

const getRandomFact = async () => {
  const res = await fetch(URLS.CAT_ENDPOINT_RANDOM_FACT);
  const data = await res.json();
  const { fact } = data;
  return fact;
};

export default getRandomFact;
