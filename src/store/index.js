import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "./hotelsSlice";
import offersReducer from "./offersSlice";
import recommendedHotelsReducer from "./recommendedHotelsSlice";
import hotelDetailsReducer from "./hotelDetailsSlice";
import authReducer from "./authSlice";
import bookingsReducer from "./bookingsSlice";

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    offers: offersReducer,
    recommendedHotels: recommendedHotelsReducer,
    hotelDetails: hotelDetailsReducer,
    auth: authReducer,
    bookings: bookingsReducer,
  },
});
