import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
import counterReducer from '../reducerSlices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here
  },
});

export default store;
