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

        <ul className="flex gap-5 font-semibold">
          <li>
            <Link to="/">Acasa</Link>
          </li>
          <li>
            <Link to="/">Chat</Link>
          </li>
          <li>
            <Link to="/toate-interpretarile">Toate interpretarile</Link>
          </li>
          <li>
            <Link to="/despre">Despre</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>


        <div>
        <div >
          {authStatus ? (
            <Link
              to="/add-post"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              {" "}
              Add Post
            </Link>
          ) : (
            null
          )}
          {authStatus ? <LogoutBtn /> : null}
        </div>
        <Link to="/blogs">
        <Button> Interpreteaza </Button>
        </Link>
      </div>
      </div>
    </>
  );
};
