import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({baseUrl: ''})

async function baseQueryWithAuth(args, api, extra) {
    const result = await baseQuery(args, api, extra);
    return result;
  }

export const apiSlice = createApi({
    baseQuery: baseQueryWithAuth, // Use the customized baseQuery
    tagTypes: ['User', 'Artist'],
    endpoints: (builder) => ({})
});