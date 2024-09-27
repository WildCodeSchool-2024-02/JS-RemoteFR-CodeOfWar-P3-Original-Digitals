import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Form, useActionData } from "react-router-dom";

export default function MovieFormEdit({
  movies,
  handleFormUpdate,
  handleSelectMovieClose,
}) {
  const validateAction = useActionData();
  const [formValues, setFormValues] = useState(movies);

  useEffect(() => {
    setFormValues(movies);
  }, [movies]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedMovie = {
      ...formValues,
      [name]: value,
    };
    setFormValues(updatedMovie);
    handleFormUpdate(updatedMovie);
  };

  return (
    <Form method="post" className="sticky">
      <section className="form-upload-edit">
        <button
          type="button"
          onClick={handleSelectMovieClose}
          className="close-button-edit"
        >
          {" "}
          Close
        </button>
        <div className="form-group-upload">
          <label htmlFor="id">ID</label>
          <input
            type="number"
            id="id"
            name="id"
            value={parseInt(formValues.id, 10)}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={parseInt(formValues.duration, 10)}
            onChange={handleChange}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="synopsis">Synopsis</label>
          <input
            type="text"
            id="synopsis"
            name="synopsis"
            value={formValues.synopsis}
            onChange={handleChange}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="date">Release date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formValues.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="classification">Classification</label>
          <input
            type="number"
            id="classification"
            name="classification"
            value={parseInt(formValues.classification, 10)}
            onChange={handleChange}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="picture">Picture</label>
          <input
            type="url"
            id="picture"
            name="picture"
            value={formValues.picture}
            onChange={handleChange}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="URL">Movie URL</label>
          <input
            type="URL"
            id="URL"
            name="URL"
            value={formValues.URL}
            onChange={handleChange}
          />
        </div>

        <button
          className="button-upload"
          type="submit"
          name="intent"
          value="put"
        >
          Envoyer
        </button>

        {validateAction?.success === true && (
          <p style={{ color: "green" }}>{validateAction.message}</p>
        )}
        {validateAction?.success === false && (
          <p style={{ color: "red" }}>{validateAction.message}</p>
        )}
      </section>
    </Form>
  );
}

MovieFormEdit.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    classification: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
  }).isRequired,
  handleFormUpdate: PropTypes.func.isRequired,
  handleSelectMovieClose: PropTypes.func.isRequired,
};
