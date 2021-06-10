import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import scrollPositionReducer from "lib/slices/scroll-position.slice";
import adminReducer from "lib/slices/admin.slice";
import snackbarReducer from "lib/slices/snackbar.slice";

const rootReducer = combineReducers({
  scrollPosition: scrollPositionReducer,
  admin: adminReducer,
  snackbar: snackbarReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["admin"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
