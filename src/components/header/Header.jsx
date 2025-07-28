import React from "react";
import headerbg from "../../assets/images/HeaderBG.jpg";
import "./Header.module.css";

function Header() {
  return (
    <header
      className="w-full  bg-cover bg-center relative h-[200px]"
      style={{
        backgroundImage: `url(${headerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white drop-shadow-md">
          Bookler
        </div>

        {/* Auth buttons */}
        <div className="flex gap-4">
          <button className="text-white font-medium hover:underline">
            Login
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
