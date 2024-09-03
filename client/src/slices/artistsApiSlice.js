import { apiSlice } from "./apiSlice";
const ARTIST_URL = '/api/artist'

export const artistApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginArtist: builder.mutation({
            query: (data) => ({
                url: `${ARTIST_URL}/auth`,
                method: 'POST',
                body: data
            })
        }),
        logoutArtist: builder.mutation({
            query: () => ({
                url: `${ARTIST_URL}/logout`,
                method: 'POST'
            })
        }),
        registerArtist: builder.mutation({
            query: (data) => ({
                url: `${ARTIST_URL}`,
                method: 'POST',
                body: data
            })
        }),
        updateArtist: builder.mutation({
            query: (data) => ({
                url: `${ARTIST_URL}/profile`,
                method: 'PUT',
                body: data
            })
        }),
    })
})

export const { useLoginArtistMutation, useLogoutArtistMutation, useRegisterArtistMutation, useUpdateArtistMutation} = artistApiSlice;