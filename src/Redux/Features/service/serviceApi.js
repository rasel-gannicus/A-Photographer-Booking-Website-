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
                // console.log('Arg : ',arg)
                const response = await queryFulfilled;
                const pathResult = dispatch(apiSlice.util.updateQueryData('getServiceCart', arg.email, (draft)=>{
                    draft.push(arg);
                }))
            }
        }),

        getServiceCart : builder.query({
            query : (email)=> `/cart/services/${email}`
        }),

        deleteService : builder.mutation({
            query : ({id, email}) => ({
                url : `/cart/service/delete/${id}`,
                method : 'DELETE'
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }){
                //--- optimistic update
                const pathResult = dispatch(apiSlice.util.updateQueryData('getServiceCart', arg.email, (draft)=>{
                    console.log('Entered ');

                    const deletedService = draft.find(index => index._id == arg.id);
                    const deletedIndex = draft.indexOf(deletedService);

                    draft.splice(deletedIndex,1);
                }))

                try{
                    const response = await queryFulfilled ; 
                }catch(err){
                    console.log(err);
                    pathResult.undo();
                }
            }
        })
    })
})

export const{useAddServiceToDbMutation, useGetServiceCartQuery, useDeleteServiceMutation} = serviceApi