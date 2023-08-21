import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice'; // Import your reducer here

const store = configureStore({
  reducer: {
    contacts: contactReducer, // Add your reducer to the store
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
