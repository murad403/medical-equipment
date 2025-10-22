import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({baseUrl: "/api"}),
    tagTypes: ["auctions"],
    endpoints: (builder) =>({
        getAllAuctions: builder.query({
            query: (query) =>{
                const params = new URLSearchParams();
                if(query){
                    params.append("query", query);
                }
                return {
                    url: "/auctions/all-auctions",
                    method: "GET",
                    params: params
                }
            },
            providesTags: ["auctions"]
        })
    })
})

export const {useGetAllAuctionsQuery} = baseApi;
export default baseApi;