import { useLoaderData } from "react-router-dom";
import "../styles/Movielist.css";
import CategoryCard from "../components/CategoryCard";

export default function MoviesList() {
  const { movies, categories } = useLoaderData();

  console.info("depuis MovieList", movies, categories);

  return (
    //   <div>
    //     {movies.map((movie) => (
    //       <MovieCard key={movie.id} movie={movie} />
    //     ))}
    //   </div>
    <div>
      {categories.map((category) => (
        <section key={category.id}>
          <CategoryCard category={category.type} movies={movies} />
        </section>
      ))}
    </div>
  );
}
