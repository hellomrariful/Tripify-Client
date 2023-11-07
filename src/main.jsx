import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Layout/Root';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import AddService from './Pages/AddService/AddService';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Services from './Pages/Home/Services';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch("http://localhost:5000/dashboard/AddService"),
      },
      {
        path: "/dashboard/AddServices",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
