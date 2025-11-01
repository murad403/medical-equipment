import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({baseUrl: "/api"}),
    tagTypes: ["auctions", "bids", "payments"],
    endpoints: (builder) =>({ 
        addReport: builder.mutation({
            query: (payload) =>{
                return {
                    url: '/report/add-report',
                    method: "POST",
                    body: payload
                }
            }
        }),
        updateProfile: builder.mutation({
            query: ({userId, payload}: {userId: string, payload: any}) =>{
                return {
                    url: `/profile/update-profile/${userId}`,
                    method: "PATCH",
                    body: payload
                }
            }
        }),
        sendMessage: builder.mutation({
            query: (payload) =>{
                return {
                    url: "/contact",
                    method: "POST",
                    body: payload
                }
            }
        }),
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
                // console.log(query);
                const params = new URLSearchParams();
                if(query?.search){
                    params.append("query", query?.search);
                }
                return {
                    url: `/auctions/all-auctions?page=${query?.page}&limit=${query?.limit}&filter=${query?.filter}`,
                    method: "GET",
                    params: params
                }
            },
            providesTags: ["auctions"] as const
        }),
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
        getSellerProduct: builder.query({
            query: () =>{
                return {
                    url: `/seller/all-product`,
                    method: "GET"
                }
            },
            providesTags: ["auctions"]
        }),
        deleteProduct: builder.mutation({
            query: (id: string) =>{
                return {
                    url: `/seller/delete-product/${id}`,
                    method: "DELETE"
                }
            },
            invalidatesTags: ["auctions", "bids"]
        }),
        updateProduct: builder.mutation({
            query: ({id, payload}: {id: string, payload: any}) =>{
                return {
                    url: `/seller/update-product/${id}`,
                    method: "PATCH",
                    body: payload
                }
            },
            invalidatesTags: ["auctions", "bids"]
        }),
        getAllBidder: builder.query({
            query: () =>{
                return {
                    url: "/seller/bidder-list",
                    method: "GET"
                }
            },
            providesTags: ["bids"]
        }),
        addSellerBidStatus: builder.mutation({
            query: ({id, payload}) =>{
                return {
                    url: `/bids/seller-bid-status/${id}`,
                    method: "PATCH",
                    body: payload
                }
            },
            invalidatesTags: ["bids"]
        }),
        changePassword: builder.mutation({
            query: (payload) =>{
                // console.log(payload);
                return {
                    url: "/seller/change-password",
                    method: "PATCH",
                    body: payload
                }
            }
        }),
        addPayment: builder.mutation({
            query: (payload: any) =>{
                return {
                    url: "/payment/create-checkout-session",
                    method: "POST",
                    body: payload
                }
            }
        }),
        savePayment: builder.mutation({
            query: (payload: any) =>{
                return {
                    url: "/payment/save-payment",
                    method: "POST",
                    body: payload
                }
            },
            invalidatesTags: ["bids", "payments"]
        }),
        getEarnings: builder.query({
            query: () =>{
                return {
                    url: `/payment/earning`,
                    method: "GET"
                }
            },
            providesTags: ["payments"]
        }),
        sellerProfileUpdate: builder.mutation({
            query: (payload: any) =>{
                return {
                    url: "/seller/update-profile",
                    method: "PATCH",
                    body: payload
                }
            }
        }),
        sellerDashboard: builder.query({
            query: () =>{
                return {
                    url: '/seller/dashboard',
                    method: "GET"
                }
            }
        })
        
    })
})

export const {useGetAllAuctionsQuery, useAddBidMutation, useUpdateProfileMutation, useGetCurrentUserBidsQuery, useRemoveBidMutation, useAddAuctionMutation, useAddReportMutation, useSendMessageMutation, useGetSellerProductQuery, useDeleteProductMutation, useUpdateProductMutation, useGetAllBidderQuery, useAddSellerBidStatusMutation, useChangePasswordMutation, useAddPaymentMutation, useSavePaymentMutation, useGetEarningsQuery, useSellerProfileUpdateMutation, useSellerDashboardQuery} = baseApi;
export default baseApi;