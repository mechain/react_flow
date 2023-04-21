import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice =  createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com"}),
    endpoints : builder => ({
        getUsers : builder.query({
            query:() => '/users'
        }),
        getPost : builder.mutation({
            query: (a) => ({
                url:`/${a}`,
                method:"GET"
            })
        })
    })
})

export const { useGetUsersQuery , useGetPostMutation } = apiSlice;