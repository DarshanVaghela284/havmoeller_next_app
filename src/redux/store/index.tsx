import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
import agentSlice from "@redux/slice/agentSlice";
import { api } from "@redux/services/api";
import filterSlice from "@redux/slice/filterSlice";
import propertiesSlice from "@redux/slice/propertySlice";
import propertiesReducer from "@redux/slice/newProperties";

// Configuration object for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["properties_new"], // Add slices you want to persist
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  properties: propertiesSlice,
  properties_new: propertiesReducer,
  filter: filterSlice,
  agent: agentSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);
