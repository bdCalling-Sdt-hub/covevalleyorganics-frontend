import { TApiResponse } from '@/types';
import { baseApi } from '../api/baseApi';

export interface TBlog {
      _id: string;
      title: string;
      content: string;
      author: string;
      image: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
}

const blogApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getAllBlog: build.query({
                  query: () => {
                        return {
                              url: `/blog`,
                              method: 'GET',
                        };
                  },
                  providesTags: ['blogs'],
                  transformResponse: (response: TApiResponse<TBlog[]>) => {
                        return response.data;
                  },
            }),
            getSingleBlog: build.query({
                  query: (id) => {
                        return {
                              url: `/blog/${id}`,
                              method: 'GET',
                        };
                  },
                  providesTags: ['blogs'],

                  transformResponse: (response: TApiResponse<TBlog>) => {
                        return response.data;
                  },
            }),
            createBlog: build.mutation({
                  query: (data) => {
                        return {
                              url: '/blog',
                              method: 'POST',
                              body: data,
                        };
                  },
                  invalidatesTags: ['blogs'],
            }),
            updateBlog: build.mutation({
                  query: (args) => {
                        return {
                              url: `/blog/${args.id}`,
                              method: 'PATCH',

                              body: args.data,
                        };
                  },
                  invalidatesTags: ['blogs'],
            }),
            deleteBlog: build.mutation({
                  query: (id) => {
                        return {
                              url: `/blog/${id}`,
                              method: 'DELETE',
                        };
                  },
                  invalidatesTags: ['blogs'],
            }),
      }),
});

export const {
      useCreateBlogMutation,
      useDeleteBlogMutation,
      useGetAllBlogQuery,

      useGetSingleBlogQuery,
      useUpdateBlogMutation,
} = blogApi;
