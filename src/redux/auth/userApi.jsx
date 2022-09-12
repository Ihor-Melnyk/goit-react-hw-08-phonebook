import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;
      headers.set('Authorization', token);
      return headers;
    },
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    //------ useCreateUserMutation -----
    createUser: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Users'],
    }),

    //------ useLogInUserMutation -------
    logInUser: builder.mutation({
      query: user => ({
        url: '/users/login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),

    //----- useLogOutUserMutation ---------
    logOutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Users'],
    }),

    //----- useCurrentUserQuery ----------
    currentUser: builder.query({
      query: () => '/users/current',
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useCurrentUserQuery,
} = userApi;
