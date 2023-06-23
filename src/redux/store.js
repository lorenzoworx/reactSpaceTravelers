import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import dragonsReducer from './Dragons/dragonsSlice';
import MissionsReducer from './Missions/missionsSlice';
import rocketReducer from './rockets/RocketsSlice';

const loggerMiddleware = createLogger();

const store = configureStore({
  reducer: {
    mission: MissionsReducer,
    rockets: rocketReducer,
    dragons: dragonsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
