import { useContext } from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import Like from "../assets/images/like.svg";
import Liked from "../assets/images/like-filled.svg";

import WatchListContext from "../contexts/WatchListContext";

import "../styles/Moviedetails.css";

export default function MovieDetails({ modalRef, movie }) {
  const { watchlist, setWatchlist } = useContext(WatchListContext);
  const releaseDate = new Date(`${movie.date}`).getFullYear();

  const hours = Math.floor(`${movie.duration}` / 60);
  const mins = `${movie.duration}` - 60 * hours;

  const closeModal = () => {
    modalRef.current.close();
  };

  const addWatchlist = () => {
    setWatchlist((prevWatchlist) => {
      const newWatchList = [...prevWatchlist];
      if (newWatchList.includes(movie.id)) {
        const index = newWatchList.indexOf(movie.id);
        if (index > -1) {
          newWatchList.splice(index, 1);
        }
      } else {
        newWatchList.push(movie.id);
      }
      return newWatchList;
    });
  };

  return (
    <dialog className="dialog-details" ref={modalRef}>
      <ReactPlayer
        controls
        light
        url={movie.URL}
        width="100%"
        className="ReactPlayer"
      />
      <h2>{movie.title}</h2>
      <section className="section-infos">
        <p>
          Durée : {hours} H {mins} mins
        </p>
        <p> Sortie : {releaseDate}</p>
        <p> Classification : - {movie.classification}</p>
      </section>
      <h3 className="detail-title"> Acteurs</h3>
      <section className="actor-list">
        <img
          src="https://images.pexels.com/photos/2227958/pexels-photo-2227958.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Actor 1"
        />
        <img
          src="https://images.pexels.com/photos/7266014/pexels-photo-7266014.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Actor 2"
        />
        <img
          src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Actor 3"
        />
        <img
          src="https://images.pexels.com/photos/1764447/pexels-photo-1764447.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Actor 4"
        />
      </section>
      <section>
        <h3 className="detail-title"> Synopsis</h3>
        <p className="synopsis-movie">{movie.synopsis}</p>
        <button
          className="watchlist-button"
          type="button"
          onClick={addWatchlist}
        >
          <img
            src={watchlist.includes(movie.id) ? { Liked } : { Like }}
            alt="like"
          />
        </button>
      </section>
      <button type="button" onClick={closeModal} className="dialog-button">
        close
      </button>
    </dialog>
  );
}

MovieDetails.propTypes = {
  modalRef: PropTypes.shape({
    current: PropTypes.shape({
      showModal: PropTypes.func,
      close: PropTypes.func,
    }),
  }).isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    classification: PropTypes.number.isRequired,
    synopsis: PropTypes.string.isRequired,
  }).isRequired,
};
