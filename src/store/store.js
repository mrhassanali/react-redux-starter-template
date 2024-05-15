import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import rootReducers from "./rootReducers";
// import logger from "react-logger";
// import { logger } from "./middleware/logger";
// import thunkMiddleware from 'redux-thunk'

export const store = configureStore({
  reducer: rootReducers,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// configure listeners using the provided defaults
setupListeners(store.dispatch);
