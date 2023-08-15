import { configureStore } from "@reduxjs/toolkit";
// Import your reducers here
import counterReducer from "../reducerSlices/counterSlice";
import authReducer from "../reducerSlices/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    // Add other reducers here
  },
});

export default store;
