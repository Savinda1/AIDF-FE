import { configureStore } from "@reduxjs/toolkit";//store ekak hadanne meyagen
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "../features/userSlice";
import searchReducer from "../features/searchSlice"

import { api } from "./api";

export const store = configureStore({
  reducer: {
    user: userReducer,
   [api.reducerPath]: api.reducer,
   search: searchReducer,
  },
 // devTools: true,
 middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);