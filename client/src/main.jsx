import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getMovies, getUsers, getMoviesByTitle } from "./services/request";
import MoviesList from "./pages/MoviesList";

import App from "./App";
import User from "./pages/User";
import SignUp from "./pages/SignUp";
import signUpUserAction from "./services/userService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sign",
        element: <SignUp />,
        action: signUpUserAction,
      },
      {
        path: "/users",
        element: <User />,
        loader: getUsers,
      },
      {
        path: "/movies",
        element: <MoviesList />,
        loader: getMovies,
      },
      {
        path: `/movies/search/:title`,
        element: <MoviesList />,
        loader: getMoviesByTitle,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
