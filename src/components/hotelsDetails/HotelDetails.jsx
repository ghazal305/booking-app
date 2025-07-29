import { useState } from "react";

const hotelImages = [
  "https://source.unsplash.com/638x423/?hotel-pool",
  "https://source.unsplash.com/638x423/?hotel-room",
  "https://source.unsplash.com/638x423/?luxury-hotel",
  "https://source.unsplash.com/638x423/?hotel-lobby",
  "https://source.unsplash.com/638x423/?hotel-balcony",
];

export default function HotelDetails() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="max-w-[1170px] h-[511px] bg-white rounded-2xl shadow p-6 mx-auto flex gap-6">
      {/* Left Side: Image Slider */}
      <div className="w-[638px] h-[423px] relative">
        <img
          src={hotelImages[currentImageIndex]}
          alt="Hotel Preview"
          className="rounded-xl w-full h-full object-cover"
        />
        <div className="flex justify-center mt-2 gap-2 absolute bottom-2 left-1/2 -translate-x-1/2">
          {hotelImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              className={`w-16 h-16 rounded-md cursor-pointer border-2 object-cover transition-all duration-300 ${
                index === currentImageIndex
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Side: Hotel Info */}
      <div className="flex-1 flex flex-col justify-between py-2">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            San Francisco Marriott Marquis
          </h2>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-800 text-white px-2 py-1 text-sm font-semibold rounded">
              4.9 ★
            </span>
            <span className="text-sm text-gray-700">Exilent</span>
            <span className="text-sm text-gray-500">275 Review</span>
          </div>

          <h3 className="font-semibold mb-1">About</h3>
          <p className="text-sm text-gray-600 line-clamp-3 mb-2">
            Whether you are in town for business or leisure, San Francisco
            welcomes travelers to Northern California with exceptional service,
            hotel rooms and suites and a prime downtown location.
          </p>

          <div className="flex items-center text-sm text-gray-600 mb-3">
            📍 780 Mission Street, San Francisco, CA 94103, United States
          </div>

          <h4 className="font-semibold mb-1">Popular Service</h4>
          <div className="flex flex-wrap gap-3 text-sm text-gray-700">
            <span>🅿️ Parking</span>
            <span>🚿 Attached Bathroom</span>
            <span>📹 CCTV Cameras</span>
            <span>📶 Wifi</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-right">
            <div className="text-red-600 font-bold text-sm mb-1">20% OFF</div>
            <div className="text-3xl font-bold">
              399 <span className="text-sm font-medium">USD</span>
            </div>
            <div className="text-xs text-gray-500">Per night</div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all">
            PAY NOW
          </button>
        </div>
      </div>
    </section>
  );
}
