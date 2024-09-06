import PropTypes from "prop-types";
import { useRef } from "react";

import MovieDetails from "./MovieDetails";

import "../styles/Moviecard.css";

export default function MovieCard({ movie }) {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.showModal();
  };

  return (
    <div key={movie.id} className="card">
      <div className="poster-container">
        <img
          src="https://images.affiches-et-posters.com//albums/3/4537/medium/affiche-film-inception-2352.jpg"
          alt={movie.title}
          className="poster"
          onClick={openModal}
          aria-hidden="true"
        />
      </div>
      <h3 className="card-title">{movie.title}</h3>
      <MovieDetails modalRef={modalRef} movie={movie} />
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string,
  }).isRequired,
};
