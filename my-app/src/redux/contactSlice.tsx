import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { userModel } from "../components/input-form";

interface initialProps {
  contacts: userModel[];
}

const initialState: initialProps = {
  contacts: [
    { firstName: "jioj", lastName: "ioj", status: "Active", id: "JOJ" },
  ],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<userModel>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<userModel>) => {
    
      const updatedContact = action.payload;
      const modifiedContact = state.contacts.map((contact) => {
        if (contact.id === updatedContact.id) {
          return updatedContact;
        }
        return contact;
      });

      state.contacts = modifiedContact;
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      
      const id = action.payload;
      const modifiedContact = state.contacts.filter((contact) => contact.id !== id);
      state.contacts = modifiedContact;
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;
// create and export the selector
export const selectContacts = (state: RootState) => state.contacts;
export default contactSlice.reducer;
