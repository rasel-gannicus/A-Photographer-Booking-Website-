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
                console.log(response);
            }
        }),
    })
})

export const{useAddServiceToDbMutation} = serviceApi