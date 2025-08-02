import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const [searchName, setSearchName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  // Debug logging
  useEffect(() => {
    console.log('SearchPage mounted');
  }, []);

  useEffect(() => {
    console.log('SearchPage fetching hotels');
    dispatch(fetchHotels());
  }, [dispatch]);

  // Debug logging for state changes
  useEffect(() => {
    console.log('SearchPage state:', { hotels, loading, error });
  }, [hotels, loading, error]);

  const handleNameSearch = () => {
    if (searchName.trim()) {
      console.log('Searching by name:', searchName.trim());
      dispatch(fetchHotels({ name: searchName.trim() }));
    }
  };

  const handleCountryFilter = (countryCode) => {
    setSelectedCountry(countryCode);
    if (countryCode) {
      console.log('Filtering by country:', countryCode);
      dispatch(fetchHotels({ country: countryCode }));
    } else {
      console.log('Clearing country filter');
      dispatch(fetchHotels());
    }
  };

  const handleClearFilters = () => {
    console.log('Clearing all filters');
    setSearchName("");
    setSelectedCountry("");
    dispatch(fetchHotels());
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
        <section className="flex flex-col gap-4 items-center">
          <div className="w-full max-w-4xl mb-6">
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Search by hotel name..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-lg"
              />
              <button
                onClick={handleNameSearch}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Search
              </button>
            </div>
            
            <div className="flex gap-2 mb-4">
              <span className="text-sm font-medium text-gray-700">Filter by country:</span>
              <select
                value={selectedCountry}
                onChange={(e) => handleCountryFilter(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg"
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
                className="px-3 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Clear
              </button>
            </div>
          </div>

          {hotels && hotels.length === 0 ? (
            <div className="text-center text-gray-500">
              No results found
            </div>
          ) : (
            hotels.map((hotel) => (
              <SearchCard key={hotel.id} hotel={hotel} />
            ))
          )}
        </section>
      </div>
    </div>
  );
}

export default SearchPage;
