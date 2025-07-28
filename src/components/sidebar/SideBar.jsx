import React from "react";
import { FaHome, FaHotel, FaHeart, FaBars,FaUserAlt ,FaGlobeAmericas,FaExclamationCircle } from "react-icons/fa";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`h-screen bg-blue-900 text-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      } fixed top-25 left-10 overflow-hidden shadow-lg z-20 rounded-lg`}
    >
      {/* Toggle button */}
      <div className="flex justify-end p-3">
        <button
          onClick={toggleSidebar}
          className="text-white text-lg focus:outline-none"
        >
          <FaBars className={`${!isOpen && "rotate-180"} transition-transform`} />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-6 mt-8 px-4">
        <a href="#" className="flex items-center gap-4 hover:text-gray-300 ">
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
          {isOpen && <span className="text-md">Suport</span>}
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
