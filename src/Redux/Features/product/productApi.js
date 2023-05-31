import { apiSlice } from "../api/apiSlice";



export const productApi = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        getAllProduct : builder.query({
            query : (count) => `/product?amount=${count}`
        }),
        getProductByCatagory : builder.mutation({
            query : ({category, currentPage, contentPerPage}) => ({
                url : `/product/category/${category}?currentPage=${currentPage}&size=${contentPerPage}`,
                method : 'POST',
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                
            }
        }),

        /* ---------------------------------------------
            Product Cart Related
        ------------------------------------------------ */

        addProductToCart : builder.mutation({
            query : (data) => ({
                url : '/cart/addProduct',
                method : 'POST',
                body : {data}
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                
            }
        })
    })
})



export const {useGetAllProductQuery, useGetProductByCatagoryQuery, useGetProductByCatagoryMutation, useAddProductToCartMutation} = productApi ; 