import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../services/api";

export const fetchBestOffers = createAsyncThunk(
  "offers/fetchBestOffers",
  async (_, thunkAPI) => {
    try {
      const data = await apiService.getBestOffers();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const offersSlice = createSlice({
  name: "offers",
  initialState: {
    bestOffers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBestOffers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBestOffers.fulfilled, (state, action) => {
        state.loading = false;
        state.bestOffers = action.payload;
      })
      .addCase(fetchBestOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default offersSlice.reducer; 