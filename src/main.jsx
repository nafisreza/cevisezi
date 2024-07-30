import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { AboutUs } from './components/pages/AboutUs.jsx';
import Layout from './Layout.jsx';
import { ContactUs } from './components/pages/ContactUs.jsx';
import { Blogs } from './components/pages/Blogs.jsx';
import { Post } from './components/pages/Post.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><App /></Layout>,
    errorElement: <App />,
  },
  {
    path: "/about",
    element: <Layout><AboutUs /></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><ContactUs /></Layout>,
  },
  {
    path: "/blogs",
    element: <Layout><Blogs /></Layout>,
  },
  {path: "/post",
    element: <Layout><Post /></Layout>,},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />    
  </React.StrictMode>,
)
