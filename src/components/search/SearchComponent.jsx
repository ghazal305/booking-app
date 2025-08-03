import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const countries = [
  { label: "United States", value: "US" },
  { label: "Morocco", value: "MA" },
  { label: "Egypt", value: "EG" },
  { label: "Greece", value: "GR" },
];

function SearComponent() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    search: "",
    country: "",
    checkIn: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Build search query parameters
    const params = new URLSearchParams();
    if (searchData.search) params.append('q', searchData.search);
    if (searchData.country) params.append('address.countryIsoCode', searchData.country);
    if (searchData.checkIn) params.append('checkIn', searchData.checkIn);
    
    const queryString = params.toString();
    navigate(`/search${queryString ? `?${queryString}` : ''}`);
  };

  const handleClearFilters = () => {
    setSearchData({
      search: "",
      country: "",
      checkIn: "",
    });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-[800px] max-w-5xl mx-auto -mt-10 relative z-10">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Search</label>
          <input
            type="text"
            name="search"
            value={searchData.search}
            onChange={handleInputChange}
            placeholder="Search hotels..."
            className="border border-gray-300 rounded-3xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Country</label>
          <select 
            name="country"
            value={searchData.country}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-3xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Country</option>
            {countries.map(country => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Check-in</label>
          <input
            type="date"
            name="checkIn"
            value={searchData.checkIn}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-3xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="button"
          onClick={handleClearFilters}
          className="text-gray-500 hover:text-red-600 text-sm underline mt-6"
        >
          Clear Filters
        </button>

        <button
          type="submit"
          className="bg-red-600 text-white rounded-3xl px-4 py-2 mt-6 hover:bg-red-700 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearComponent;
