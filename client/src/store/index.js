import { configureStore } from '@reduxjs/toolkit';
import gitReducer from '../reducer/gitSlice';

export const store = configureStore({
  reducer: {
    git: gitReducer,
  },
});
