import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    services : []
}


const serviceSlice = createSlice({
    name : 'service',
    initialState,
    reducers : {

    }
})

export const {} = serviceSlice.actions ; 
export default serviceSlice.reducer ;