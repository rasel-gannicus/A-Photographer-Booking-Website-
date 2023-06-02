import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart : {
        totalPrice : 0,
        items : 0,
        shippingCharge : 0,
        discount : 0 , 
        allTotal : 0 ,
    }
} ;

const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers :{
        updateCart : (state, action) =>{
            state.cart.totalPrice = action.payload.totalPrice;
            state.cart.items = action.payload.items;
            state.cart.shippingCharge = action.payload.shippingCharge;
            state.cart.discount = action.payload.discount;
            state.cart.allTotal = action.payload.allTotal;
        }
    }
})


export const {updateCart} = productSlice.actions ;
export default productSlice.reducer ; 