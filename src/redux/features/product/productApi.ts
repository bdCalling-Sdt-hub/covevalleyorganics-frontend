import { TApiResponse } from '@/types';
import { baseApi } from '../api/baseApi';
interface Product {
      _id: string;
      name: string;
      description: string;
      image: string;
      ingredientImage: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
}

const productApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getAllProducts: build.query({
                  query: () => {
                        return {
                              url: `/products`,
                              method: 'GET',
                        };
                  },
                  providesTags: ['products'],
                  transformResponse: (response: TApiResponse<Product[]>) => {
                        return response.data;
                  },
            }),
            getSingleProduct: build.query({
                  query: (id) => {
                        return {
                              url: `/products/${id}`,
                              method: 'GET',
                        };
                  },
                  providesTags: ['products'],
            }),
            createProduct: build.mutation({
                  query: (data) => {
                        return {
                              url: '/products',
                              method: 'POST',
                              body: data,
                        };
                  },
                  invalidatesTags: ['products'],
            }),
            updateProduct: build.mutation({
                  query: (args) => {
                        return {
                              url: `/products/${args.id}`,
                              method: 'PATCH',

                              body: args.data,
                        };
                  },
                  invalidatesTags: ['products'],
            }),
            deleteProduct: build.mutation({
                  query: (id) => {
                        return {
                              url: `/products/${id}`,
                              method: 'DELETE',
                        };
                  },
                  invalidatesTags: ['products'],
            }),
      }),
});

export const {
      useCreateProductMutation,
      useDeleteProductMutation,
      useGetAllProductsQuery,
      useGetSingleProductQuery,
      useUpdateProductMutation,
} = productApi;
