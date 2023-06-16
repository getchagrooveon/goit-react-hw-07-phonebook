import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '236-41-44' },
  { id: 'id-2', name: 'Hermione Kline', number: '459-93-23' },
  { id: 'id-3', name: 'Eden Clements', number: '466-86-02' },
  { id: 'id-4', name: 'Annie Copeland', number: '789-85-00' },
  { id: 'id-5', name: 'Angelos Rejick', number: '238-12-73' },
];

const initialState = {
  contacts: DEFAULT_CONTACTS,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts = [action.payload, ...state.contacts];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    getFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, getFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
