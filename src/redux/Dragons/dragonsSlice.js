import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/dragons');
  return response.data;
});

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: [],
  reducers: {
    reserveDragon: (state, action) => {
      const { id } = action.payload;
      return state.map((dragon) => {
        if (dragon.id !== id) {
          return dragon;
        }
        return { ...dragon, reserved: true };
      });
    },
    cancelReservation: (state, action) => {
      const { id } = action.payload;
      return state.map((dragon) => {
        if (dragon.id !== id) {
          return dragon;
        }
        return { ...dragon, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDragons.fulfilled, (state, action) => action.payload);
  },
});

export const { reserveDragon, cancelReservation } = dragonsSlice.actions;
export default dragonsSlice.reducer;
