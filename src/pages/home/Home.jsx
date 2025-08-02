import React from "react";
import RecommendedCarousel from "../../components/RecommendedCarousel/RecommendedCarousel";
import BestOffers from "../../components/bestOffers/BestOffers";

function Home() {
  return (
    <div className=" min-h-screen">
      <RecommendedCarousel />
      <BestOffers />
    </div>
  );
}

export default Home;
