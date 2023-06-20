import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../redux/Missions/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
