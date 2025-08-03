import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchHotels } from "../../store/hotelsSlice";
import SearchCard from "../../components/searchCard/SearchCard";

const countries = [
  { label: "United States", value: "US" },
  { label: "Morocco", value: "MA" },
  { label: "Egypt", value: "EG" },
  { label: "Greece", value: "GR" },
];

function SearchPage() {
  const dispatch = useDispatch();
  const { hotels, loading, error } = useSelector((state) => state.hotels);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [searchName, setSearchName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  // Initialize search parameters from URL
  useEffect(() => {
    const q = searchParams.get('q');
    const countryCode = searchParams.get('address.countryIsoCode');
   
    
    if (q) setSearchName(q);
    if (countryCode) setSelectedCountry(countryCode);
    
    // Fetch hotels with search parameters
    const params = {};
    if (q) params.name = q;
    if (countryCode) params.country = countryCode;
    
    dispatch(fetchHotels(params));
  }, [dispatch, searchParams]);

  const handleNameSearch = () => {
    const params = new URLSearchParams();
    if (searchName.trim()) {
      params.set('q', searchName.trim());
    }
    if (selectedCountry) {
      params.set('address.countryIsoCode', selectedCountry);
    }
    setSearchParams(params);
  };

  const handleCountryFilter = (countryCode) => {
    setSelectedCountry(countryCode);
    const params = new URLSearchParams();
    if (searchName.trim()) {
      params.set('q', searchName.trim());
    }
    if (countryCode) {
      params.set('address.countryIsoCode', countryCode);
    }
    setSearchParams(params);
  };

  const handleClearFilters = () => {
    setSearchName("");
    setSelectedCountry("");
    setSearchParams({});
    dispatch(fetchHotels());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNameSearch();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-red-600">
            Error loading hotels: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Hotels</h1>
          <p className="text-gray-600">Find your perfect accommodation</p>
        </div>

        <section className="flex flex-col gap-4 items-center">
          <div className="w-full max-w-4xl mb-6">
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Search by hotel name..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleNameSearch}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Search
              </button>
            </div>
            
            <div className="flex gap-2 mb-4 items-center">
              <span className="text-sm font-medium text-gray-700">Filter by country:</span>
              <select
                value={selectedCountry}
                onChange={(e) => handleCountryFilter(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">All Countries</option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              <button
                onClick={handleClearFilters}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="w-full">
            {hotels && hotels.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotels.map((hotel) => (
                  <SearchCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🏨</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Results Found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or browse all available hotels.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  View All Hotels
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SearchPage;
