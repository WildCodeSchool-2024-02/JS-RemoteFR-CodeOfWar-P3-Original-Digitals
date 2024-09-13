import axios from "axios";
import PropTypes from "prop-types";

export default function CategoryCard({ category, movies }) {
  const getMoviesByCategories = async (type) => {
    const result = await axios
      .get(`${import.meta.env.VITE_API_URL}/api/movies/categories/${type}`)
      .then((response) => console.info(response.data))
      .catch((error) => {
        console.error(error);
        return [];
      });
    return result;
  };

  console.info(getMoviesByCategories(category));
  console.info(movies);

  return (
    <section>
      <h2>{category}</h2>
    </section>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
