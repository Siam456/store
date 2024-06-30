import api from '@/redux/api/apiSlice';
import { tagTypes } from '@/redux/tag-types';

const categoriesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPublishedcategory: build.query({
      query: (data) => ({
        url: `category/show`,
        method: 'Get',
        body: data,
      }),
      providesTags: [tagTypes.categories],
    }),

    getAllCatagories: build.query({
      query: () => ({
        url: `category`,
        method: 'GET',
      }),
      providesTags: [tagTypes.categories],
    }),

    getTopCatagories: build.query({
      query: () => ({
        url: `category/new`,
        method: 'GET',
      }),
      providesTags: [tagTypes.categories],
    }),
  }),
});

export const {
  useGetAllCatagoriesQuery,
  useGetPublishedcategoryQuery,
  useGetTopCatagoriesQuery,
} = categoriesApi;
