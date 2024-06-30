import api from '@/redux/api/apiSlice';
import { tagTypes } from '@/redux/tag-types';

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProductBySlug: build.query({
      query: (slug) => ({
        url: `products/${slug}`,
        method: 'GET',
      }),
    }),

    getPublishedProducts: build.query({
      query: (data) => ({
        url: `products/show`,
        method: 'Get',
        body: data,
      }),
      providesTags: [tagTypes.products],
    }),

    getAllProducts: build.query({
      query: () => ({
        url: `products`,
        method: 'GET',
      }),
      providesTags: [tagTypes.products],
    }),

    getTopProducts: build.query({
      query: () => ({
        url: `products/most-viewed`,
        method: 'GET',
      }),
      providesTags: [tagTypes.products],
    }),

    increaseViewCount: build.mutation({
      query: (productId) => ({
        url: `products/${productId}/view`,
        method: 'PUT',
      }),
    }),

    deleteAllProducts: build.mutation({
      query: () => ({
        url: `products`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.products],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetPublishedProductsQuery,
  useGetTopProductsQuery,
  useDeleteAllProductsMutation,
  useIncreaseViewCountMutation,
  useGetProductBySlugQuery,
} = productsApi;
