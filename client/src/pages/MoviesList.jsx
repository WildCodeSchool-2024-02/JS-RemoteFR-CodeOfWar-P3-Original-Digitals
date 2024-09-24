import PropTypes from "prop-types";
import MovieCard from "../components/MovieCard";

export default function MoviesList({ movies }) {
  return (
    <div className="card-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.shape.isRequired,
};
