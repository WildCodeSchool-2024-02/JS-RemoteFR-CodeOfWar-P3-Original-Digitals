import { useLoaderData } from "react-router-dom";
import MoviesList from "./MoviesList";

export default function Watchlist() {
  const movies = useLoaderData();

  return (
    <>
      <h2>What will be your next movie ?</h2>
      <MoviesList movies={movies} />
    </>
  );
}
