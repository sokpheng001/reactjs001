import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_ENDPOINT }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
    getProductById: build.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
    addNewProduct: build.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
    }),
    updateProduct: build.mutation({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteProductById: build.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useDeleteProductByIdMutation,
  useUpdateProductMutation,
  useAddNewProductMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} = productApi;
