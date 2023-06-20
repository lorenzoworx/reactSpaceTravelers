import { configureStore } from '@reduxjs/toolkit';
import MissionsReducer from './Missions/missionsSlice';

const store = configureStore({
  reducer: {
    mission: MissionsReducer,
  },
});

export default store;
