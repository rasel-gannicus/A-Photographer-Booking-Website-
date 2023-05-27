import { apiSlice } from "../api/apiSlice";



export const productApi = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        getAllProduct : builder.query({
            query : () => '/product'
        }),
        getProductByCatagory : builder.mutation({
            query : (category) => ({
                url : `/product/category/${category}`,
                method : 'POST',
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // --- optimistic update
                console.log(arg)  ; 
            }
        })
    })
})



export const {useGetAllProductQuery, useGetProductByCatagoryQuery, useGetProductByCatagoryMutation} = productApi ; 