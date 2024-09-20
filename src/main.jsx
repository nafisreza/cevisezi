import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { AboutUs } from "./pages/AboutUs.jsx";
import Layout from "./Layout.jsx";
import { ContactUs } from "./pages/ContactUs.jsx";
import Blogs from "./pages/Blogs.jsx";
import { Post } from "./pages/Post.jsx";
import { Provider } from "react-redux";
import Login from "./pages/Login.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import SignUp from "./pages/SignUp.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import { HomePage } from "./pages/HomePage";
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />{" "}
      </Layout>
    ),
    errorElement: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <AboutUs />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <ContactUs />
      </Layout>
    ),
  },
  {
    path: "/blogs",
    element: (
      <Layout>
        <Blogs />
      </Layout>
    ),
  },
  {
    path: "/post/:slug",
    element: (
      <Layout>
        <Post />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthLayout authentication={false}>
        <Login />
      </AuthLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthLayout authentication={false}>
        <SignUp />
      </AuthLayout>
    ),
  },
  {
    path: "/all-posts",
    element: (
      <AuthLayout authentication={false}>
        <AllPosts />
      </AuthLayout>
    ),
  },
  {
    path: "/add-post",
    element: (
      <AuthLayout authentication={true}>
        <AddPost />
      </AuthLayout>
    ),
  },
  {
    path: "/edit-post/:slug",
    element: (
      <AuthLayout authentication={true}>
        <EditPost />
      </AuthLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
