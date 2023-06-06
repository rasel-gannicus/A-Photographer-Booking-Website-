import { apiSlice } from "../api/apiSlice";



export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: (count) => `/product?amount=${count}`
        }),
        getProductByCatagory: builder.mutation({
            query: ({ category, currentPage, contentPerPage }) => ({
                url: `/product/category/${category}?currentPage=${currentPage}&size=${contentPerPage}`,
                method: 'POST',
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {

            }
        }),

        /* ---------------------------------------------
            Product Cart Related
        ------------------------------------------------ */

        addProductToCart: builder.mutation({
            query: (data) => ({
                url: '/cart/addProduct',
                method: 'POST',
                body: { data }
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const response = await queryFulfilled;
                    const pathResult = await dispatch(apiSlice.util.updateQueryData('getUserAllProduct', arg.email, (draft) => {
                        const newData = {...arg, _id:response.data.insertedId}
                        draft.push(newData);
                    }))
                } catch (err) {
                    console.log(err);

                }
            }
        }),
        // getAllProductCart: builder.query({
        //     query: () => '/cart/getAllProduct'
        // }),

        /* // --- this query is for avoiding adding multiple product at 'Shop' page. It will check if the product that has been selected by user is already in his cart */
        gettingSingleProductFromCart: builder.query({
            query: ({ email, id }) => `/cart/singleProduct?email=${email}&id=${id}`
        }),

        // --- Getting all the cart product for Every user
        getUserAllProduct: builder.query({
            query: (email) => `/cart/user/${email}`
        }),

        // --- delete a product for a user
        deleteProductOfUser: builder.mutation({
            query: ({ email, id }) => ({
                url: `/cart/user/delete?email=${email}&id=${id}`,
                method: 'DELETE'
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {

                const pathResult = await dispatch(apiSlice.util.updateQueryData('getUserAllProduct', arg.email, (draft) => {
                    // selectedProduct
                    const deletedProduct = draft.find(index => index._id === arg.id);
                    const deletedIndex = draft.indexOf(deletedProduct);

                    draft.splice(deletedIndex, 1);
                }))

                try {
                    const response = await queryFulfilled;
                } catch (err) {
                    console.log(err);
                    pathResult.undo();
                }
            }
        }),

        // --- update a product cart
        updateCart : builder.mutation({
            query : (data)=>({
                url : '/cart/update',
                method : 'PATCH',
                body : data
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {                
                const pathResult = await dispatch(apiSlice.util.updateQueryData('getUserAllProduct', arg.email, (draft)=>{
                    const selectedProduct = draft.find(index => index._id === arg.id);
                    selectedProduct.quantity = arg.quantity;
                }))
                try {
                    const response = await queryFulfilled;
                } catch (err) {
                    console.log(err);
                    pathResult.undo();
                }
            }

        })

    })
})



export const { useGetAllProductQuery, useGetProductByCatagoryQuery, useGetProductByCatagoryMutation, useAddProductToCartMutation, useGetAllProductCartQuery, useGettingSingleProductFromCartQuery, useGetUserAllProductQuery, useDeleteProductOfUserMutation, useUpdateCartMutation } = productApi; 