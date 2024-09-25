// Import the repository modules responsible for handling data operations on the tables
const CategoryRepository = require("./models/categoryRespository");
const ItemRepository = require("./models/ItemRepository");
const MovieRepository = require("./models/MovieRepository");
const UserRepository = require("./models/UserRepository");
const AdminRepository = require("./models/AdminRepository");
const MovieCategoryRepository = require("./models/MovieCategoryRepository");
const WatchlistRepository = require("./models/WatchlistRepository");

// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Register each repository as data access point for its table
tables.item = new ItemRepository();
tables.movie = new MovieRepository();
tables.user = new UserRepository();
tables.admin = new AdminRepository();
tables.category = new CategoryRepository();
tables.movie_category = new MovieCategoryRepository();
tables.watchlist = new WatchlistRepository();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
