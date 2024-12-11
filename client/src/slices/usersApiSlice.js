import { apiSlice } from "./apiSlice";
const AUDIENCE_URL = '/api/audience';
const SAVED_EVENTS_URL = '/api/audience/saved-events';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${AUDIENCE_URL}/auth`,
                method: 'POST',
                body: data,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${AUDIENCE_URL}/logout`,
                method: 'POST',
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${AUDIENCE_URL}`,
                method: 'POST',
                body: data,
            }),
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${AUDIENCE_URL}/profile`,
                method: 'PUT',
                body: data,
            }),
        }),
        getEvents: builder.mutation({
            query: () => ({
                url: `${AUDIENCE_URL}/events`,
                method: 'GET',
            }),
        }),
        saveEvent: builder.mutation({
            query: (eventId) => ({
                url: `${SAVED_EVENTS_URL}`,
                method: 'POST',
                body: { eventId },
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useUpdateUserMutation,
    useGetEventsMutation,
    useSaveEventMutation,
} = userApiSlice;
