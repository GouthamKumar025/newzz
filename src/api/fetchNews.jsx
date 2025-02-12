import axios from "axios";

const API_KEY = "9142f28247ad39e4eb77606bb6172c8a";
const BASE_URL = "http://api.mediastack.com/v1/news";

export const fetchNews = async (category, country = "us") => {
  try {
    const responses = await axios.get(`${BASE_URL}`, {
      params: {
        access_key: API_KEY,
        categories: category,
        countries: country,
      },
    });
    return responses.data;
  } catch (error) {
    console.log("Error occured " + error);
    return null;
  }
};
