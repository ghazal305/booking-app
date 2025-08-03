import React from "react";
import headerbg from "../../assets/images/HeaderBG.jpg";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <header
      className="w-full h-[200px] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${headerbg})`,
      }}
    >
      <div className="relative z-20 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white drop-shadow-md">
          Bookler
        </div>
        <div className="flex gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="text-white">Welcome, {user?.name || user?.email}</span>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
