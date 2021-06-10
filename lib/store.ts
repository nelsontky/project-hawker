import { configureStore } from "@reduxjs/toolkit";
import scrollPositionReducer from "lib/slices/scroll-position.slice";
import adminReducer from "lib/slices/admin.slice";
import snackbarReducer from "lib/slices/snackbar.slice";

const store = configureStore({
  reducer: {
    scrollPosition: scrollPositionReducer,
    admin: adminReducer,
    snackbar: snackbarReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
