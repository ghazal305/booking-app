import React from "react";
import RecommendedCarousel from "../../components/RecommendedCarousel/RecommendedCarousel";
import BestOffers from "../../components/bestOffers/BestOffers";

function Home() {
  return (
    <div className="mt-10 w-[85%] absolute right-1 min-h-screen">
      <RecommendedCarousel />
      <BestOffers />
    </div>
  );
}

export default Home;
