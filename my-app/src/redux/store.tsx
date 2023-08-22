import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice"; // Import your reducer here

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
