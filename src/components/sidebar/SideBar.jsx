import React from "react";
import { FaHome, FaHeart, FaBars, FaUserAlt, FaSignOutAlt, FaSignInAlt, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function Sidebar({ isOpen, toggleSidebar }) {
  const dispatch = useDispatch();
  const { isAuthenticated} = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

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
        <Link to="/" className="flex items-center gap-4 hover:text-gray-300">
          <FaHome size={20} />
          {isOpen && <span className="text-md">Home</span>}
        </Link>
        
        <Link to="/search" className="flex items-center gap-4 hover:text-gray-300">
          <FaHeart size={20} />
          {isOpen && <span className="text-md">Explore</span>}
        </Link>
        
        <div className="flex items-center gap-4 hover:text-gray-300">
          <FaHeart size={20} />
          {isOpen && <span className="text-md">Support</span>}
        </div>

        {/* Conditional rendering based on authentication */}
        {isAuthenticated ? (
          <>
            <Link to="/my-bookings" className="flex items-center gap-4 hover:text-gray-300">
              <FaBook size={20} />
              {isOpen && <span className="text-md">My Bookings</span>}
            </Link>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-4 hover:text-gray-300"
            >
              <FaSignOutAlt size={20} />
              {isOpen && <span className="text-md">Logout</span>}
            </button>
          </>
        ) : (
          <Link to="/signup" className="flex items-center gap-4 hover:text-gray-300">
            <FaSignInAlt size={20} />
            {isOpen && <span className="text-md">Sign Up</span>}
          </Link>
        )}
      </nav>
    </aside>
  );
}

export default Sidebar;
