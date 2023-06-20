import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
