import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; 
import { Navigation, Autoplay } from "swiper/modules"; 

import RecommendedCard from "../RecommendedCard/RecommendedCard";

const fakeHotels = [
  {
    id: 1,
    name: "Marriott Resort",
    location: "Cairo",
    image: "https://via.placeholder.com/300x200",
    price: 120,
  },
  {
    id: 2,
    name: "Hilton Nile",
    location: "Luxor",
    image: "https://via.placeholder.com/300x200",
    price: 90,
  },
  {
    id: 3,
    name: "Four Seasons",
    location: "Sharm El-Sheikh",
    image: "https://via.placeholder.com/300x200",
    price: 180,
  },
  {
    id: 4,
    name: "Steigenberger",
    location: "Alexandria",
    image: "https://via.placeholder.com/300x200",
    price: 110,
  },
];

function RecommendedCarousel() {
  return (
    <div className="mt-2 px-6  ">
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
        {fakeHotels.map((hotel) => (
          <SwiperSlide key={hotel.id}>
            <RecommendedCard
              image={hotel.image}
              title={hotel.name} 
              address={hotel.location} 
              coupon={`$${hotel.price}`} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RecommendedCarousel;
