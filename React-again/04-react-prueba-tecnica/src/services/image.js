import { URLS } from "../enums/CONSTANTS.JS";

const getImage = async ({ firstWord }) => {
  const res = await fetch(`${URLS.CATFACT_RANDOM_IMAGE}/${firstWord}?json=true`);
  const data = await res.json();
  const { _id } = data;
  const url = `${URLS.CAT_PREFIX_IMAGE_URL}/cat/${_id}/says/${firstWord}`;
  return url;
};

export default getImage;
