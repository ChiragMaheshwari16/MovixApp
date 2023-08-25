import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDBhZjYzYWQ4YTRmNWMxN2E2MzdiZWZlOWUzNTExMCIsInN1YiI6IjY0ZTg2Yjk3MDZmOTg0MDBhZTQ4ZDc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7PE7uUald797JvxsdPIYjZIPZYju1r9GtuPvPXNMnkQ";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
