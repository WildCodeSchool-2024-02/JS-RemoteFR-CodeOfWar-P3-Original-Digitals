const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const movies = await tables.movie.readAll();

    res.json(movies);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const movie = await tables.movie.read(req.params.id);
    if (movie == null) {
      res.sendStatus(404);
    } else {
      res.json(movie);
    }
  } catch (err) {
    next(err);
  }
};

const readByTitle = async (req, res, next) => {
  try {
    const movie = await tables.movie.searchByTitle(req.params.title);
    if (movie == null) {
      res.sendStatus(404);
    } else {
      res.json(movie);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    console.info("coucou");
    console.info(req.body);
    const movie = req.body;
    const result = await tables.movie.uploadMovie(movie);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
    next(err);
  }
};

module.exports = { browse, read, readByTitle, add };
