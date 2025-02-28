import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_AUTH_ENDPOINT,
  }),
  endpoints: (build) => ({
    getLogin: build.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
    }),
    getVerified: build.mutation({
      query: (token) => ({
        url: "/users/me",
        method: "POST",
        body: { token },
      }),
    }),
  }),
});

export const { useGetLoginMutation, useGetVerifiedMutation } = authApi;
