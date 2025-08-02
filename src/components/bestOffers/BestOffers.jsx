import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestOffers } from "../../store/offersSlice";
import BestOfferCard from "../bestOfferCard/BestOfferCard";
// import Link from "react-router-dom";

const BestOffers = () => {
  const dispatch = useDispatch();
  const { bestOffers, loading, error } = useSelector((state) => state.offers);

  useEffect(() => {
    dispatch(fetchBestOffers());
  }, [dispatch]);

  // Debug logging
  useEffect(() => {
    console.log("BestOffers data:", bestOffers);
    console.log("Loading state:", loading);
    console.log("Error state:", error);
  }, [bestOffers, loading, error]);

  if (loading) {
    return (
      <article className="w-full bg-white p-4 mt-6">
        <h2 className="text-xl font-bold mb-4">Best Offer</h2>
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </article>
    );
  }

  if (error) {
    return (
      <article className="w-full bg-white p-4 mt-6">
        <h2 className="text-xl font-bold mb-4">Best Offer</h2>
        <div className="text-center text-red-600">
          Error loading offers: {error}
        </div>
      </article>
    );
  }

  if (!bestOffers || bestOffers.length === 0) {
    return (
      <article className="w-full bg-white p-4 mt-6">
        <h2 className="text-xl font-bold mb-4">Best Offer</h2>
        <div className="text-center text-gray-500">
          No offers available at the moment.
        </div>
      </article>
    );
  }

  return (
    <article className="w-full bg-white p-4 mt-6">
      <h2 className="text-xl font-bold mb-4">Best Offer</h2>
      <div className="flex flex-wrap gap-4">
        {bestOffers.map((offer, idx) => {
          console.log("Rendering offer:", offer);
          return (
            <BestOfferCard
              key={offer.id || idx}
              city={offer.name || offer.city}
              description={offer.location || offer.description}
              image={offer.image}
            />
          );
        })}
      </div>
    </article>
  );
};

export default BestOffers;
