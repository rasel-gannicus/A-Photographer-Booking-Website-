import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Features/api/apiSlice";
import productReducer from '../Features/product/productSlice';
import serviceReducer from '../Features/service/serviceSlice' ;

export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer,
        products : productReducer,
        services : serviceReducer
    },
    middleware : (getDefaultMiddleWares) => getDefaultMiddleWares().concat(apiSlice.middleware),
})