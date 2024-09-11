import { apiSlice } from "./apiSlice";
const AUDIENCE_URL = '/api/audience'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${AUDIENCE_URL}/auth`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${AUDIENCE_URL}/logout`,
                method: 'POST'
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${AUDIENCE_URL}`,
                method: 'POST',
                body: data
            })
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${AUDIENCE_URL}/profile`,
                method: 'PUT',
                body: data
            })
        }),
        getEvents: builder.mutation({
            query: () => ({
                url: `${AUDIENCE_URL}/events`,
                method: 'GET',
            })
        }),
    })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateUserMutation, useGetEventsMutation} = userApiSlice;