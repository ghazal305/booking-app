import React, { useState } from "react";

const BestOfferCard = ({ city, description, image }) => {
  const [imageError, setImageError] = useState(false);
  
  // Fallback image if the original image fails to load
  const fallbackImage = "https://source.unsplash.com/100x100/?city";
  const imageSrc = imageError || !image ? fallbackImage : image;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
    <div className="w-[220px] h-[80px] bg-gray-100 rounded-2xl shadow-sm p-2 flex items-center hover:shadow-md transition-shadow">
      <img
        src={imageSrc}
        alt={city || "City"}
        className="w-12 h-12 rounded-full object-cover mr-3"
        onError={handleImageError}
      />
      <div className="text-left">
        <h3 className="text-sm font-semibold text-gray-800">{city || "City Name"}</h3>
        <p className="text-xs text-gray-500">{description || "Description"}</p>
      </div>
    </div>
    </>
  );
};

export default BestOfferCard;

