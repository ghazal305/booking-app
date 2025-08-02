import React, { useState } from "react";

const RecommendedCard = ({ image, title, address, coupon }) => {
  const [imageError, setImageError] = useState(false);
  
  // Fallback image if the original image fails to load
  const fallbackImage = "https://source.unsplash.com/300x200/?hotel";

  
  const imageSrc = imageError || !image ? fallbackImage : image;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="flex bg-white shadow-md rounded-2xl p-4 w-[344px] transition-transform duration-300 hover:scale-105">
      <img
        src={imageSrc}
        alt={title || "Hotel"}
        className="w-28 h-28 rounded-xl object-cover"
        onError={handleImageError}
      />
      <div className="ml-4 flex flex-col justify-between">
        <span className="text-xs text-gray-400 font-semibold">HOTEL</span>
        <h3 className="text-lg font-semibold">{title || "Hotel Name"}</h3>
        <p className="text-sm text-gray-500">{address || "Location"}</p>
        <p className="text-sm font-medium">
          Cupon: <span className="text-black font-bold">{coupon || "$N/A"}</span>
        </p>
        <button className="mt-2 px-4 py-1 bg-red-400 hover:bg-red-500 text-white rounded-full text-sm">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RecommendedCard;
