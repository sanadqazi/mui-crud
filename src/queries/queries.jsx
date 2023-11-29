import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const queriesApi = createApi ({
    baseQuery : fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints : (builder) => ({
        fetchData: builder.query({
            query: ({ limit, offset }) => `posts?_limit=${limit}&_start=${offset}`
        }),
        addData: builder.mutation({
            query: (post) => ({
                url: `posts`,
                method: 'POST',
                body: post
            })
        }),
        deleteData: builder.mutation({
            query: ({id}) => ({
                url: `posts/${id}`,
                method: 'DELETE'
            })
        }),
        updateData: builder.mutation({
            query: (post) => ({
                url: `posts`,
                method: 'PUT',
                body: post
            })
        }),
        fetchDataById: builder.query({
            query: ({id}) => `posts/${id}`
        })
    }),
});

export const { useFetchDataQuery, useAddDataMutation, useUpdateDataMutation, useDeleteDataMutation, useFetchDataByIdQuery } = queriesApi;
export const useFetchDataWithParams = (limit, offset) => useFetchDataQuery({ limit, offset });
export const useFetchDataByIdWithParams = (id) => useFetchDataByIdQuery({ id });