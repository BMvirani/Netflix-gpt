import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import gptReducer from './gptSlice'
import configReducer from './configSlice'
const store = configureStore({
  reducer: {
    movies: moviesReducer,
    gpt:gptReducer,
    config:configReducer
  },
});

export default store;