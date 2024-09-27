import { useState } from "react";
import { getMoviesByTitle } from "../services/request";
import MovieFormEdit from "./MovieFormEdit";
import MovieSelection from "./MovieSelection";
import "../styles/Movieedit.css";

export default function MovieEdit() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState(null);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchButton = async () => {
    if (search.length > 0) {
      const results = await getMoviesByTitle({ params: { title: search } });

      setMovies(results);
    } else {
      setMovies([]);
    }
  };

  const handleSelectMovie = (movie) => {
    setSelectMovie(movie);
  };
  const handleSelectMovieClose = () => {
    setSelectMovie(null);
  };

  const handleFormUpdate = (updateMovie) => {
    setSelectMovie(updateMovie);
  };

  return (
    <>
      <section className="movie-edit-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a movie..."
          onChange={handleSearch}
        />
        <button
          className="search-button"
          onClick={handleSearchButton}
          type="button"
        >
          Search
        </button>
      </section>

      <div>
        <div className="container-result">
          <MovieSelection
            movies={movies}
            handleSelectMovie={handleSelectMovie}
            setMovies={setMovies}
          />

          {selectMovie && (
            <section className="form-section-edit">
              <MovieFormEdit
                movies={selectMovie}
                handleFormUpdate={handleFormUpdate}
                handleSelectMovieClose={handleSelectMovieClose}
              />
            </section>
          )}
        </div>
      </div>
    </>
  );
}
