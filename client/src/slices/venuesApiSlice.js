import { apiSlice } from "./apiSlice";
const VENUE_URL = '/api/venue'

export const venueApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginVenue: builder.mutation({
            query: (data) => ({
                url: `${VENUE_URL}/auth`,
                method: 'POST',
                body: data
            })
        }),
        logoutVenue: builder.mutation({
            query: () => ({
                url: `${VENUE_URL}/logout`,
                method: 'POST'
            })
        }),
        registerVenue: builder.mutation({
            query: (data) => ({
                url: `${VENUE_URL}`,
                method: 'POST',
                body: data
            })
        }),
        updateVenue: builder.mutation({
            query: (data) => ({
                url: `${VENUE_URL}/profile`,
                method: 'PUT',
                body: data
            })
        }),
        createEvent: builder.mutation({
            query: (data) => ({
                url: `${VENUE_URL}/events`,
                method: 'POST',
                body: data
            })
        }),

        getEvents: builder.query({
            query: () => ({
                url: `${VENUE_URL}/events`,
                method: 'GET',
            }),
        }),
    })
})

export const { useLoginVenueMutation, useLogoutVenueMutation, useRegisterVenueMutation, useUpdateVenueMutation, useCreateEventMutation} = venueApiSlice;