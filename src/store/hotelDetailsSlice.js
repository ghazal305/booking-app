import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../services/api";

export const fetchHotelDetails = createAsyncThunk(
  "hotelDetails/fetchHotelDetails",
  async (id, thunkAPI) => {
    try {
      const data = await apiService.getHotelDetails(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const hotelDetailsSlice = createSlice({
  name: "hotelDetails",
  initialState: {
    hotel: {},
    loading: false,
    error: null,
  },
  reducers: {
    clearHotelDetails: (state) => {
      state.hotel = {};
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotelDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotelDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.hotel = action.payload;
      })
      .addCase(fetchHotelDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearHotelDetails } = hotelDetailsSlice.actions;
export default hotelDetailsSlice.reducer; 