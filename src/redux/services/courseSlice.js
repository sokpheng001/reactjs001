import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_ENDPOINT }),
  endpoints: (build) => ({
    getAllCoures: build.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
    getCourseById: build.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
    addNewCourse: build.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
    }),
    updateCourse: build.mutation({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteCourseById: build.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllCouresQuery
} = courseApi;
