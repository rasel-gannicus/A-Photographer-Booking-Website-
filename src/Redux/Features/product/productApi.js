import { apiSlice } from "../api/apiSlice";



export const productApi = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        getAllProduct : builder.query({
            query : () => '/product'
        }),
        getProductByCatagory : builder.query({
            query : (catagory) => `/product/${catagory}`
        })
    })
})



export const {useGetAllProductQuery, useGetProductByCatagoryQuery} = productApi ; 