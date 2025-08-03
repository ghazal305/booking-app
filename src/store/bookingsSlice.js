import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  loading: false,
  error: null,
};

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    setBookings: (state, action) => {
      state.bookings = action.payload;
    },
    clearBookings: (state) => {
      state.bookings = [];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  addBooking,
  setBookings,
  clearBookings,
  setLoading,
  setError,
  clearError,
} = bookingsSlice.actions;

export default bookingsSlice.reducer; 