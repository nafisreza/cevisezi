import React, { useState } from "react"; 
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";
import { FaBars, FaTimes } from 'react-icons/fa';  // Icons for hamburger and close

export const NavBar = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center my-5 px-4">
        {/* Logo */}
        <Link to="/">
          <img src="/assets/cevisezi-logo.png" alt="Logo" className="h-[60px]" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 font-semibold">
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

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {authStatus && (
            <>
              <Link
                to="/add-post"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Add Post
              </Link>
              <LogoutBtn />
            </>
          )}
          <Link to="/toate-interpretarile">
            <Button> Interpreteaza </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-200 p-5">
          <ul className="flex flex-col gap-5 font-semibold">
            <li>
              <Link to="/" onClick={toggleMobileMenu}>Acasa</Link>
            </li>
            <li>
              <Link to="/" onClick={toggleMobileMenu}>Chat</Link>
            </li>
            <li>
              <Link to="/toate-interpretarile" onClick={toggleMobileMenu}>Toate interpretarile</Link>
            </li>
            <li>
              <Link to="/despre" onClick={toggleMobileMenu}>Despre</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
            </li>
            {authStatus && (
              <>
                <Link
                  to="/add-post"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Add Post
                </Link>
                <LogoutBtn onClick={toggleMobileMenu} />
              </>
            )}
            <Link to="/toate-interpretarile" onClick={toggleMobileMenu}>
              <Button> Interpreteaza </Button>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};
