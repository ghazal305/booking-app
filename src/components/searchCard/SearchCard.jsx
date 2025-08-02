import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchCard({ hotel }) {
  const [imageError, setImageError] = useState(false);
  
  // Default values in case hotel data is missing
  const {
    id,
    name = "Hotel Name",
    location = "Location",
    image = "https://source.unsplash.com/160x175/?hotel",
    rating = 4.9,
    price = 473,
    discount = 25,
    amenities = ["Parking", "Wifi"]
  } = hotel || {};

  // Fallback image if the original image fails to load
  const fallbackImage = "https://source.unsplash.com/160x175/?hotel";
  const imageSrc = imageError || !image ? fallbackImage : image;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="w-[564px] h-[175px] bg-white shadow-md rounded-xl flex overflow-hidden">
      {/* Left image */}
      <img
        src={imageSrc}
        alt={name}
        className="w-[160px] h-full object-cover"
        onError={handleImageError}
      />

      {/* Right content */}
      <div className="p-4 relative w-full flex flex-col justify-between">
        {/* Rating */}
        <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded-full">
          {rating} ★
        </div>

        {/* Title & Location */}
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            {name}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {location}
          </p>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 text-gray-400 text-sm mt-2">
          {amenities.slice(0, 2).map((amenity, index) => (
            <div key={index} className="flex items-center gap-1">
              <i className="fas fa-parking" /> {amenity}
            </div>
          ))}
        </div>

        {/* Price and Buttons */}
        <div className="flex justify-between items-center mt-3">
          <div className="text-sm">
            <span className="text-orange-500 font-semibold">{discount}% off</span>
            <span className="ml-2 text-xl font-bold text-gray-800">${price}</span>
          </div>
          <div className="flex gap-2">
            <Link to={`/hotel/${id}`}>
              <button className="px-3 py-1 bg-gray-100 rounded-md text-sm font-medium">
                View Details
              </button>
            </Link>
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
