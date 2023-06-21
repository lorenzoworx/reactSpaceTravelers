import { configureStore } from '@reduxjs/toolkit';
import MissionsReducer from './Missions/missionsSlice';
import rocketReducer from './rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    mission: MissionsReducer,
    rockets: rocketReducer,
  },
});

export default store;
