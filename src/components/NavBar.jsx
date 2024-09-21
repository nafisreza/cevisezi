import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";

export const NavBar = () => {
  const authStatus = useSelector((state) => state.auth.status);

  return (
    <>
      <div className="flex justify-around items-center my-5 ">
        <Link to="/">
          <img src="/assets/cevisezi-logo.png" alt="" className="h-[60px]" />
        </Link>

        <ul className="flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Chat</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {authStatus ? (
            <Link
              to="/add-post"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              {" "}
              Add Post
            </Link>
          ) : (
            ""
          )}
          {authStatus ? <LogoutBtn /> : <Link to="/login">Login</Link>}
        </div>
        <Button> Get Started </Button>
      </div>
    </>
  );
};
