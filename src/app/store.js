import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../features/pages/PageSlice";
import searchReducer from "../features/search/SearchSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rickandmortyApi } from "../services/post";
export const store = configureStore({
  reducer: {
    [rickandmortyApi.reducerPath]: rickandmortyApi.reducer,
    page: pageReducer,
    search: searchReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickandmortyApi.middleware),
});

setupListeners(store.dispatch);
