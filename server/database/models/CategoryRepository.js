const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
  }

  async readAll() {
    const [result] = await this.database.query(`SELECT * FROM ${this.table}`);

    return result;
  }
}

module.exports = CategoryRepository;
