import axios from "axios";

export function getMovies() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/movies`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getMoviesByTitle({ params }) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/movies/search/${params.title}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getCategories() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/movies/categories`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export const categoriesMoviesLoader = async () => {
  const [categories, movies] = await Promise.all([
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/movies/categories`)
      .then((categoriesRes) => categoriesRes.data)
      .catch((error) => {
        console.error(error);
        return [];
      }),
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/movies`)
      .then((moviesRes) => moviesRes.data)
      .catch((error) => {
        console.error(error);
        return [];
      }),
  ]);

  return { categories, movies };
};

export function getUsers() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/users`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getAuth() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/checkauth`, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
}
