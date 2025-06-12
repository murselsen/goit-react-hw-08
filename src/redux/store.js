import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import authRedcuer from "./auth/slice";
import constactsReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";

export const store = configureStore({
  reducer: {
    auth: authRedcuer,
    contacts: constactsReducer,
    filters: filtersReducer,
  },
});
export const persistor = persistStore(store);
