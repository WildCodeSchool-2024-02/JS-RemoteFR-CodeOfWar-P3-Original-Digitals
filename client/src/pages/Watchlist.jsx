import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import MoviesList from "./MoviesList";
import WatchListContext from "../contexts/WatchListContext";

export default function Watchlist() {
  const movies = useLoaderData();
  const { watchlist } = useContext(WatchListContext);
  const watchlistedMovies = movies.filter((movie) => watchlist.includes(movie.id))

  return (
    <>
      <h2 className="watchlist-title">What will be your next movie ?</h2>
      <MoviesList movies={watchlistedMovies} />
    </>
  );
}
