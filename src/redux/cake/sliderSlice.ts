import { sliderApi } from '@api/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type sliderData = {
  id: number;
  imageUrl: string;
  title: string;
  text: string;
}
interface SliderState {
  data: sliderData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: SliderState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchSliderData = createAsyncThunk('slider/fetchSliderData', async () => {
  const response = await axios.get(sliderApi);
  return response.data;
});

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliderData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSliderData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSliderData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch slider data';
      });
  },
});

export default sliderSlice.reducer;
