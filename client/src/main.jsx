import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  getAuth,
  getMovies,
  getMoviesByTitle,
  getUserById,
} from "./services/request";
import adminUploadAction from "./services/adminService";
import { signUpUserAction, loginUserAction, editUserAction } from "./services/userService";
import { AuthProvider } from "./contexts/AuthContext";

import App from "./App";
import LandingPage from "./pages/LandingPage";
import User from "./pages/User";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import AdminPanel from "./pages/AdminPanel";
import MoviesList from "./pages/MoviesList";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getAuth,
        errorElement: <LandingPage />,
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
        path: "/user/:id",
        element: <User />,
        action: editUserAction,
        loader: getUserById,
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
      {
        path: "/admin",
        element: <AdminPanel />,
        action: adminUploadAction,
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
