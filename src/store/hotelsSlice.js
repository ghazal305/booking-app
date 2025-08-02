import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../services/api";

export const fetchHotels = createAsyncThunk(
  "hotels/fetchHotels",
  async (filters = {}, thunkAPI) => {
    try {
      let data;
      if (filters.name) {
        data = await apiService.searchHotels(filters.name);
      } else if (filters.country) {
        data = await apiService.searchHotelsByCountry(filters.country);
      } else {
        data = await apiService.getAllHotels();
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    hotels: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.hotels = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default hotelsSlice.reducer;
