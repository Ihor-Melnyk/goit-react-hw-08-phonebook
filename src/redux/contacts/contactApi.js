import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;
      headers.set('Authorization', token);
      return headers;
    },
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    //----- useFetchContactsQuery --------
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),

    //------ useDeleteContactMutation -------
    deleteContact: builder.mutation({
      query: ContactId => ({
        url: `/contacts/${ContactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),

    //------ useEditContactMutation ---------
    editContact: builder.mutation({
      query: contact => ({
        url: `/contacts/${contact.id}`,
        method: 'PATCH',
        body: { name: contact.name, number: contact.number },
      }),
      invalidatesTags: ['Contact'],
    }),

    //------- useCreateContactMutation -------
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useEditContactMutation,
  useCreateContactMutation,
} = contactApi;
