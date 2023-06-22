import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './Dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
});

export default store;
