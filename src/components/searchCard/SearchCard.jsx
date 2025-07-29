import React from "react";

function SearchCard() {
  return (
    <div className="w-[564px] h-[175px] bg-white shadow-md rounded-xl flex overflow-hidden">
      {/* Left image */}
      <img
        src="https://source.unsplash.com/160x175/?hotel"
        alt="hotel"
        className="w-[160px] h-full object-cover"
      />

      {/* Right content */}
      <div className="p-4 relative w-full flex flex-col justify-between">
        {/* Rating */}
        <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded-full">
          4.9 ★
        </div>

        {/* Title & Location */}
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            Taj Fort Aguada Resort & Spa Candolin, Goa
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Near railway station, Shirdi
          </p>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 text-gray-400 text-sm mt-2">
          <div className="flex items-center gap-1">
            <i className="fas fa-parking" /> Parking
          </div>
          <div className="flex items-center gap-1">
            <i className="fas fa-wifi" /> Wifi
          </div>
        </div>

        {/* Price and Buttons */}
        <div className="flex justify-between items-center mt-3">
          <div className="text-sm">
            <span className="text-orange-500 font-semibold">25% off</span>
            <span className="ml-2 text-xl font-bold text-gray-800">$473</span>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-gray-100 rounded-md text-sm font-medium">
              View Details
            </button>
            <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm font-medium">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
