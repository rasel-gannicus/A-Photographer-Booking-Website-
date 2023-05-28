import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    services : [],
    serviceAddedInCart : []
}


const serviceSlice = createSlice({
    name : 'service',
    initialState,
    reducers : {
        addServiceToCart : (state, action)=>{
            state.serviceAddedInCart = action.payload;
        }
    }
})

export const {addServiceToCart} = serviceSlice.actions ; 
export default serviceSlice.reducer ;