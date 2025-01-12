import axios from "axios";

export const fetchArticles = async (query, page) => {
  const data = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${"5kJiduQZXDrak05aIKQLuTRGsyxClJF_DSQM4byZP2c"}&query=${query}&page=${page}`
  );

  return data;
};
