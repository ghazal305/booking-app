import React from "react";
import BestOfferCard from "../bestOfferCard/BestOfferCard";

const offers = [
  {
    city: "Alexandria",
    description: "Best Hotel, villa",
    image: "https://source.unsplash.com/100x100/?alexandria",
  },
  {
    city: "Astana",
    description: "Best Hotel, villa",
    image: "https://source.unsplash.com/100x100/?astana",
  },
  {
    city: "Calgary",
    description: "Best Hotel, villa",
    image: "https://source.unsplash.com/100x100/?calgary",
  },
];

const BestOffers = () => {
  return (
    <article className="w-full bg-white p-4 mt-6">
      <h2 className="text-xl font-bold mb-4">Best Offer</h2>
      <div className="flex flex-wrap gap-4">
        {offers.map((offer, idx) => (
          <BestOfferCard key={idx} {...offer} />
        ))}
      </div>
    </article>
  );
};

export default BestOffers;
