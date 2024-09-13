import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getAuth, getMovies, getUsers, getMoviesByTitle } from "./services/request";
import MoviesList from "./pages/MoviesList";

import App from "./App";
import LandingPage from "./pages/LandingPage";
import User from "./pages/User";
import SignUp from "./pages/SignUp";
import { signUpUserAction, loginUserAction } from "./services/userService";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getAuth,
        errorElement: <LandingPage />
      },
      {
        path: "/sign",
        element: <SignUp />,
        action: signUpUserAction,
      },
      {
        path: "/login",
        element: <SignIn />,
        action: loginUserAction,
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
      {
        path: "/landing",
        element: <LandingPage />,
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
