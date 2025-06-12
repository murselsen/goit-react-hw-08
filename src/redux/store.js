import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
export const store = configureStore({
  reducer: {
    //   auth :
    // contacts :
    // filters :
  },
});
export const persistor = persistStore(store);
