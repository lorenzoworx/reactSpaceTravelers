import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './Dragons/dragonsSlice';
import MissionsReducer from './Missions/missionsSlice';
import rocketReducer from './rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    mission: MissionsReducer,
    rockets: rocketReducer,
    dragons: dragonsReducer,
  },
});

export default store;
