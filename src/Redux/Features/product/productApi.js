import { apiSlice } from "../api/apiSlice";



export const productApi = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        getAllProduct : builder.query({
            query : () => '/product'
        }),
        getProductByCatagory : builder.mutation({
            query : ({category, currentPage, contentPerPage}) => ({
                url : `/product/category/${category}?currentPage=${currentPage}&size=${contentPerPage}`,
                method : 'POST',
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // --- optimistic update
            }
        })
    })
})



export const {useGetAllProductQuery, useGetProductByCatagoryQuery, useGetProductByCatagoryMutation} = productApi ; 