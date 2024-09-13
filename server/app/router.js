const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const itemActions = require("./controllers/itemActions");
const movieActions = require("./controllers/movieActions");
const userActions = require("./controllers/userActions");
const authActions = require("./controllers/authActions");
const auth = require("./services/auth");
const middleware = require("./services/middleware");

// Route to get a list of items
router.get("/items", itemActions.browse);
router.get("/items/:id", itemActions.read);
router.post("/items", itemActions.add);

// route to get a list of movies
router.get("/movies", movieActions.browse);
router.get("/movies/:id", movieActions.read);
router.get("/movies/search/:title", movieActions.readByTitle);

// routes for user related actions
router.get("/checkauth", auth.verifyToken, auth.isConnected);
router.get("/users", userActions.browse);
router.get("/users/:id", userActions.read);
router.post("/sign", middleware.verifyFields, auth.hashPassword, userActions.add);
router.post("/login", authActions.verifyEmailPassword, auth.createToken, authActions.login);

/* ************************************************************************* */

module.exports = router;
