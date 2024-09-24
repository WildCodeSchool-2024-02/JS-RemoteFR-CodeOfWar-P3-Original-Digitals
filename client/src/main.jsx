import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  getAuth,
  getMovies,
  getMoviesByTitle,
  getMoviesWithCategories,
  getUserById,
} from "./services/request";
import { signUpUserAction, editUserAction } from "./services/userService";
import { AuthProvider } from "./contexts/AuthContext";
import { multiFormAction } from "./services/adminService";

import App from "./App";
import LandingPage from "./pages/LandingPage";
import User from "./pages/User";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import MoviesList from "./pages/MoviesList";
import Login from "./pages/Login";
import Watchlist from "./pages/Watchlist";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          await getAuth();
          return getMoviesWithCategories();
        },
        errorElement: <LandingPage />,
      },
      {
        path: "/sign",
        element: <SignUp />,
        action: signUpUserAction,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/user/:id",
        element: <User />,
        action: editUserAction,
        loader: getUserById,
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
      {
        path: "/admin",
        element: <AdminPanel />,
        action: multiFormAction,
        loader: getMovies,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
        loader: getMovies,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
