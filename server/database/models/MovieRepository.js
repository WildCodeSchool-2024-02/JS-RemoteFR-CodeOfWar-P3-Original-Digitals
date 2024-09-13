const AbstractRepository = require("./AbstractRepository");

class MovieRepository extends AbstractRepository {
  constructor() {
    super({ table: "movie" });
  }

  async readAll() {
    const [result] = await this.database
      .query(`SELECT movie.title, movie.duration, movie.synopsis, movie.date, movie.classification, movie.picture, movie.URL, GROUP_CONCAT(category.type SEPARATOR ", ") AS "type"
FROM
    ${this.table}
    INNER JOIN movie_category ON movie.id = movie_category.movie_id
    INNER JOIN category ON category.id = movie_category.category_id
GROUP BY
    movie.title,
    movie.duration,
    movie.synopsis,
    movie.date,
    movie.classification,
    movie.picture,
    movie.URL;`);

    return result;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async searchByTitle(title) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where title like ?`,
      [`%${title}%`]
    );
    return rows;
  }
}

module.exports = MovieRepository;
