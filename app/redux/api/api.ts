import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({baseUrl: "/api"}),
    tagTypes: ["auctions"],
    endpoints: (builder) =>({
        // user related endpoints----------------
        updateProdile: builder.mutation({
            query: ({email, payload}: {email: string, payload: any}) =>{
                return {
                    url: `/profile/update-profile/${email}`,
                    method: "PATCH",
                    body: payload
                }
            }
        }),

        // product relatd endpoints--------------------------
        // ! get all auction-----
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
        }),
        // ! add new bid------
        addBid: builder.mutation({
            query: (payload) =>{
                return {
                    url: "/bids/add-bid",
                    method: "POST",
                    body: payload 
                }
            },
            invalidatesTags: ["auctions"]
        })
    })
})

export const {useGetAllAuctionsQuery, useAddBidMutation, useUpdateProdileMutation} = baseApi;
export default baseApi;