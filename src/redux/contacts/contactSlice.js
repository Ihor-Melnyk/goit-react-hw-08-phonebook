import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://631097fa826b98071a456dfa.mockapi.io/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => ({
        url: `/contacts`,
        method: 'GET',
      }),
      providesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: ContactId => ({
        url: `/contacts/${ContactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),

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
  useCreateContactMutation,
} = contactApi;
