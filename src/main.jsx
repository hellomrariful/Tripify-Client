import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Layout/Root";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Provider/AuthProvider";
import AddService from "./Pages/AddService/AddService";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Services from "./Pages/Home/Services";
import SingleServiceDetails from "./SingleServiceDetails/SingleServiceDetails";
import Gellery from "./Pages/Gallery/Gellery";
import { HelmetProvider } from "react-helmet-async";
import ManageService from "./Pages/ManageService/ManageService";
import MySchedules from "./MySchedules/MySchedules";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/gallery",
        element: <Gellery></Gellery>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch("https://tripify-server-cyan.vercel.app/dashboard/AddService"),
      },
      {
        path: "/dashboard/AddServices",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoute>
            <SingleServiceDetails></SingleServiceDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tripify-server-cyan.vercel.app/dashboard/AddServices/${params.id}`
          ),
      },
      {
        path: "/dashboard/ManageServices",
        element: (
          <PrivateRoute>
            <ManageService></ManageService>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/MySchedules",
        element: (
          <PrivateRoute>
            <MySchedules></MySchedules>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
