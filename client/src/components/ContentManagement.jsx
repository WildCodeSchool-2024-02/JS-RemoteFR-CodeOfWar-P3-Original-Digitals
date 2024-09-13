import { Form, useActionData } from "react-router-dom";

export default function ContentManagement() {
  const actionData = useActionData();
  return (
    <Form method="post">
      <section className="form-upload">
        <div className="form-group-upload">
          <label htmlFor="title">Title</label>{" "}
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your title"
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="duration">Duration</label>{" "}
          <input
            type="number"
            id="duration"
            name="duration"
            placeholder="Enter your duration"
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="synopsis">Synopsis</label>{" "}
          <input
            type="text"
            id="synopsis"
            name="synopsis"
            placeholder="Enter your synopsis"
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="date">Release date</label>{" "}
          <input type="date" id="date" name="date" placeholder="Realse date" />
        </div>
        <div className="form-group-upload">
          <label htmlFor="classification">Classification</label>{" "}
          <input
            type="number"
            id="classifaction"
            name="classification"
            placeholder="classifaction"
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="picture">Picture</label>{" "}
          <input
            type="url"
            id="picture"
            name="picture"
            placeholder="upload a picture"
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="URL">Movie</label>{" "}
          <input
            type="url"
            id="movie"
            name="movie"
            placeholder="upload a movie"
          />
        </div>

        <button className="button-upload" type="submit">
          Envoyer
        </button>

        {actionData?.success && (
          <p style={{ color: "green" }}>{actionData.message}</p>
        )}
        {actionData?.success === false && (
          <p style={{ color: "red" }}>{actionData.message}</p>
        )}
      </section>
    </Form>
  );
}
