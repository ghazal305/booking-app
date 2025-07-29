import React from "react";
import { FaHotel, FaHome, FaPlaneDeparture, FaTaxi } from "react-icons/fa";

function Navbar() {
  const navItems = [
    { label: "Hotels", icon: <FaHotel /> },
    { label: "Villas", icon: <FaHome /> },
    { label: "Flights", icon: <FaPlaneDeparture /> },
    { label: "Taxis", icon: <FaTaxi /> },
  ];

  return (
    <nav className="flex justify-center gap-8 mt-2 px-6 z-30 relative transition transition-transform duration-300 hover:scale-125">
      {navItems.map((item, index) => (
        <button
          key={index}
          className="flex flex-col items-center text-white hover:text-yellow-300 transition transition-transform duration-300 hover:scale-125"
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="text-sm mt-1">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default Navbar;