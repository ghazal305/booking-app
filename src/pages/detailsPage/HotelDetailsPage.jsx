import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HotelDetails from "../../components/hotelsDetails/HotelDetails";
import { fetchHotelDetails, clearHotelDetails } from "../../store/hotelDetailsSlice";

function HotelDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { hotel, loading, error } = useSelector((state) => state.hotelDetails);

  // Debug logging
  useEffect(() => {
    console.log('HotelDetailsPage mounted with id:', id);
  }, [id]);

  useEffect(() => {
    if (id) {
      console.log('Fetching hotel details for id:', id);
      dispatch(fetchHotelDetails(id));
    }

    return () => {
      console.log('Clearing hotel details');
      dispatch(clearHotelDetails());
    };
  }, [dispatch, id]);

  // Debug logging for state changes
  useEffect(() => {
    console.log('HotelDetailsPage state:', { hotel, loading, error });
  }, [hotel, loading, error]);

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
            Error loading hotel details: {error}
          </div>
        </div>
      </div>
    );
  }

  if (!hotel || Object.keys(hotel).length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-gray-500">
            Hotel not found.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <HotelDetails hotel={hotel} />
      </div>
    </div>
  );
}

export default HotelDetailsPage;
