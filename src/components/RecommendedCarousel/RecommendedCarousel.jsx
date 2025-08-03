import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

import RecommendedCard from "../RecommendedCard/RecommendedCard";
import { Link } from "react-router-dom";
import { fetchRecommendedHotels } from "../../store/recommendedHotelsSlice";

function RecommendedCarousel() {
  const dispatch = useDispatch();
  const { recommendedHotels, loading, error } = useSelector((state) => state.recommendedHotels);

  useEffect(() => {
    dispatch(fetchRecommendedHotels());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="mt-2 px-6">
        <h2 className="text-xl font-bold mb-4">Recommended Hotels</h2>
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-2 px-6">
        <h2 className="text-xl font-bold mb-4">Recommended Hotels</h2>
        <div className="text-center text-red-600">
          Error loading hotels: {error}
        </div>
      </div>
    );
  }

  if (!recommendedHotels || recommendedHotels.length === 0) {
    return (
      <div className="mt-2 px-6">
        <h2 className="text-xl font-bold mb-4">Recommended Hotels</h2>
        <div className="text-center text-gray-500">
          No recommended hotels available at the moment.
        </div>
      </div>
    );
  }

  return (
    <div className="mt-2 px-6">
      <h2 className="text-xl font-bold mb-4">Recommended Hotels</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {recommendedHotels.map((hotel) => (
          <SwiperSlide key={hotel.id}>
            <RecommendedCard
              id={hotel.id}
              image={hotel.image}
              title={hotel.name}
              address={hotel.location}
              coupon={`$${hotel.price || 'N/A'}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RecommendedCarousel;
