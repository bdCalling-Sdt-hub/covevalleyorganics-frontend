import { baseApi } from '../api/baseApi';

const authApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            loginAdmin: build.mutation({
                  query: (data) => {
                        return {
                              url: '/user',
                              method: 'POST',
                              body: data,
                        };
                  },
            }),
      }),
});

export const { useLoginAdminMutation } = authApi;
