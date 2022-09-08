import { createSlice } from '@reduxjs/toolkit';
import { contactApi } from './contactApi';

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
    },
    getCurrent: (state, { payload }) => {
      state.email = payload.email;
      state.name = payload.name;
    },
  },
});

export const { getCurrentContactsSuccess, getCurrent } = contactApi.actions;
export default contactApi.reducer;
