import { baseApi } from '../api/baseApi';

const supportApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getSupport: build.query({
                  query: () => {
                        return {
                              url: `/support`,
                              method: 'GET',
                        };
                  },
                  providesTags: ['supports'],
                  transformResponse: (response: any) => {
                        return response.data[0];
                  },
            }),

            createSupport: build.mutation({
                  query: (data) => {
                        return {
                              url: '/support',
                              method: 'POST',
                              body: data,
                        };
                  },
                  invalidatesTags: ['supports'],
            }),
            updateSupport: build.mutation({
                  query: (args) => {
                        return {
                              url: `/support/${args.id}`,
                              method: 'PATCH',

                              body: args.data,
                        };
                  },
                  invalidatesTags: ['supports'],
            }),
      }),
});

export const { useCreateSupportMutation, useGetSupportQuery, useUpdateSupportMutation } = supportApi;
