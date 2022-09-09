import { createSlice } from '@reduxjs/toolkit';
// import { contactApi } from './contactApi';

const initialState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    getCurrentContactsSuccess: (state, { payload }) => {
      state.name = payload.name;
      state.number = payload.number;
      state.token = payload.token;
    },
    getCurrent: (state, { payload }) => {
      state.email = payload.email;
      state.name = payload.name;
    },
  },
});

export const { getCurrentContactsSuccess, getCurrent } = contactSlice.actions;
export default contactSlice.reducer;
