import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

const initialState = {
  name: '',
  email: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, { payload }) => {
      const { user, token } = payload;

      state.email = user.email;
      state.name = user.name;
      state.token = token;
    },
    getCurrentSuccess: (state, { payload }) => {
      state.email = payload.email;
      state.name = payload.name;
    },
  },
  extraReducers: builder => {
    //userRegistered
    builder.addMatcher(
      userApi.endpoints.createUser.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;

        state.email = user.email;
        state.name = user.name;
        state.token = token;
      }
    );

    //userSuccess
    builder.addMatcher(
      userApi.endpoints.logInUser.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;

        state.email = user.email;
        state.name = user.name;
        state.token = token;
      }
    );

    //userlogout
    builder.addMatcher(
      userApi.endpoints.logOutUser.matchFulfilled,
      (state, { payload }) => {
        state.email = initialState.email;
        state.name = initialState.name;
        state.token = initialState.token;
      }
    );

    // //userError
    // builder.addMatcher(
    //   userApi.endpoints.currentUser.matchRejected,
    //   (state, { payload }) => {
    //     if (payload.status === 401) {
    //       state.token = '';
    //     }
    //   }
    // );
  },
});

export const { loginSuccess, getCurrentSuccess } = userSlice.actions;
export default userSlice.reducer;
