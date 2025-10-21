import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({baseUrl: "/api"}),
    tagTypes: ["auctions"],
    endpoints: (builder) =>({
        getAllAuctions: builder.query({
            query: () =>{
                return {
                    url: "/auctions/all-auctions",
                    method: "GET"
                }
            },
            providesTags: ["auctions"]
        })
    })
})

export const {useGetAllAuctionsQuery} = baseApi;
export default baseApi;