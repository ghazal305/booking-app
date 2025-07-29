import React from "react";
import { FaHome, FaHeart, FaBars, FaUserAlt } from "react-icons/fa";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed top-20 left-4 h-[75%] bg-blue-900 text-white transition-all duration-300 z-40 shadow-lg overflow-hidden rounded-r-lg ${
        isOpen ? "w-50" : "w-16"
      }`}
    >
      <div className="flex justify-end p-3">
        <button
          onClick={toggleSidebar}
          className="text-white text-lg focus:outline-none"
        >
          <FaBars
            className={`${!isOpen && "rotate-180"} transition-transform`}
          />
        </button>
      </div>
      <nav className="flex flex-col gap-6 mt-8 px-4">
        <a href="#" className="flex items-center gap-4 hover:text-gray-300">
          <FaHome size={20} />
          {isOpen && <span className="text-md">Home</span>}
        </a>
        <a href="#" className="flex items-center gap-4 hover:text-gray-300">
          <FaUserAlt size={20} />
          {isOpen && <span className="text-md">My Bookings</span>}
        </a>
        <a href="#" className="flex items-center gap-4 hover:text-gray-300">
          <FaHeart size={20} />
          {isOpen && <span className="text-md">Explore</span>}
        </a>
        <a href="#" className="flex items-center gap-4 hover:text-gray-300">
          <FaHeart size={20} />
          {isOpen && <span className="text-md">Support</span>}
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
