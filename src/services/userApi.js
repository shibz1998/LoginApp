import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
  endpoints: builder => ({
    // getAllItems: builder.query({
    //   query: () => 'items',
    // }),
    postUser: builder.mutation({
      query: ({email, password}) => ({
        url: 'Users/login',
        method: 'POST',
        body: {email, password},
        // headers: {'X-Access-Token': newItem.accessToken},
      }),
    }),
  }),
});

export const {usePostUserMutation} = userApi;
