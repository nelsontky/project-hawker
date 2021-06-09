import { configureStore } from "@reduxjs/toolkit";
import scrollPositionReducer from "lib/slices/scroll-position.slice";

const store = configureStore({
  reducer: {
    scollPosition: scrollPositionReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
