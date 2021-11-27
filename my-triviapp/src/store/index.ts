import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./questionSlice";

const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
