import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
      reducerPath: 'baseApi',
      baseQuery: fetchBaseQuery({ baseUrl: 'https://fahim.binarybards.online' }),
      // http://localhost:3000/
      // https://covevalleyorganics.com/api/
      // http://10.0.70.122:3004/
      endpoints: () => ({}),
      tagTypes: ['products', 'faqs', 'blogs', 'supports'],
});
