import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_ENDPOINT }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => "/",
    }),
    getProductById: build.query({
        query:(id)=>`/${id}`
    })
  }),
});


export const {useGetAllProductsQuery, useGetProductByIdQuery} = productApi
