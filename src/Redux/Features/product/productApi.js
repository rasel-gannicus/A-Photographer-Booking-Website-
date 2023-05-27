import { apiSlice } from "../api/apiSlice";



export const productApi = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        getAllProduct : builder.query({
            query : () => '/product'
        })
    })
})



export const {useGetAllProductQuery} = productApi ; 