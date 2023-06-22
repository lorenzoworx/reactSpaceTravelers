import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './Dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    mission: MissionsReducer,
    rockets: rocketReducer,
    dragons: dragonsReducer,
  },
});

export default store;
