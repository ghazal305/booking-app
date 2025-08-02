import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../services/api";

export const fetchRecommendedHotels = createAsyncThunk(
  "recommendedHotels/fetchRecommendedHotels",
  async (_, thunkAPI) => {
    try {
      const data = await apiService.getRecommendedHotels();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const recommendedHotelsSlice = createSlice({
  name: "recommendedHotels",
  initialState: {
    recommendedHotels: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendedHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecommendedHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.recommendedHotels = action.payload;
      })
      .addCase(fetchRecommendedHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default recommendedHotelsSlice.reducer; 