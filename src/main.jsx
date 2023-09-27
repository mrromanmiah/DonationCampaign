import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import Donation from './pages/Donation/Donation';
import Statistics from './pages/Statistics/Statistics';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Details from './pages/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/donation.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch('/donation.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('/donation.json')
      },
      {
        path: "/cards/:id",
        element: <Details></Details>,
        loader: () => fetch('/donation.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
