import { useLoaderData } from "react-router-dom";

import MovieCard from "../components/MovieCard";
import "../styles/Movielist.css";

export default function MoviesList() {
  const data = useLoaderData();

  console.info("depuis MovieList", data);

  return (
    <div className="card-container">
      {data.categories.map((category) => (
        <section key={category.id}>{category.type}</section>
      ))}
      {data.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
