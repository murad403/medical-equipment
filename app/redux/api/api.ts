import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({baseUrl: "/api"}),
    tagTypes: ["auctions", "bids"],
    endpoints: (builder) =>({
        // user related endpoints----------------
        // ! update profile--------
        updateProfile: builder.mutation({
            query: ({userId, payload}: {userId: string, payload: any}) =>{
                return {
                    url: `/profile/update-profile/${userId}`,
                    method: "PATCH",
                    body: payload
                }
            }
        }),

        // product relatd endpoints--------------------------
        // ! get all auction-----
        addAuction: builder.mutation({
            query: (payload) =>{
                return {
                    url: "/seller/upload-product",
                    method: "POST",
                    body: payload
                }
            },
            invalidatesTags: ["auctions"]
        }),
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
            providesTags: ["auctions"] as const
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
            invalidatesTags: ["auctions", "bids"]
        }),

        getCurrentUserBids: builder.query({
            query: (query) =>{
                const params = new URLSearchParams();
                if(query){
                    params.append("query", query);
                }
                return {
                    url: "/bids/current-user-bids",
                    method: "GET",
                    params: params
                }
            },
            providesTags: ["bids"] as const
        }),
        removeBid: builder.mutation({
            query: (id) =>{
                // console.log(id);
                return {
                    url: `/bids/remove-bid/${id}`,
                    method: "PATCH"
                }
            },
            invalidatesTags: ["bids"]
        }),
        
    })
})

export const {useGetAllAuctionsQuery, useAddBidMutation, useUpdateProfileMutation, useGetCurrentUserBidsQuery, useRemoveBidMutation, useAddAuctionMutation} = baseApi;
export default baseApi;