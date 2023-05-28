import { apiSlice } from "../api/apiSlice";


export const serviceApi = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        addServiceToDb : builder.mutation({
            query : (data)=>({
                url : '/services/add',
                method : 'PUT',
                body : data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // --- optimistic update
                // console.log(arg)
                const response = await queryFulfilled;
                // console.log(response);
            }
        }),
        getServiceCart : builder.query({
            query : (email)=> `/cart/services/${email}`
        }),
        deleteService : builder.mutation({
            query : (id) => ({
                url : `/cart/service/delete/${id}`,
                method : 'DELETE'
            })
        })
    })
})

export const{useAddServiceToDbMutation, useGetServiceCartQuery, useDeleteServiceMutation} = serviceApi