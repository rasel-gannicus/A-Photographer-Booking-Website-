import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Features/api/apiSlice";
import productReducer from '../Features/product/productSlice';
import serviceReducer from '../Features/service/serviceSlice' ;
import modalReducer from '../Features/modal/modalSlice'

export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer,
        products : productReducer,
        services : serviceReducer,
        modal : modalReducer
    },
    middleware : (getDefaultMiddleWares) => getDefaultMiddleWares().concat(apiSlice.middleware),
})