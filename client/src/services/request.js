import axios from "axios";

function getMovies() {
  return axios
    .get("http://localhost:3310/api/movies")
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

export default getMovies;
