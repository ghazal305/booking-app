import React from "react";

const BestOfferCard = ({ city, description, image }) => {
  return (
    <div className="w-[220px] h-[80px] bg-gray-100 rounded-2xl shadow-sm p-2 flex items-center hover:shadow-md transition-shadow">
      <img
        src={image}
        alt={city}
        className="w-12 h-12 rounded-full object-cover mr-3"
      />
      <div className="text-left">
        <h3 className="text-sm font-semibold text-gray-800">{city}</h3>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default BestOfferCard;

