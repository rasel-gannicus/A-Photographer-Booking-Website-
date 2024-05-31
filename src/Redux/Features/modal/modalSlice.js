import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalShow: false,
  showDataId : '' 
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    activeModal : (state, action)=>{
        // console.log(action.payload);
        state.modalShow = true ;
        state.showDataId = action.payload.productId
    },
    
    hideModal : (state, action)=>{
        state.modalShow = false ;
        state.showDataId = '' ;
    },
    
  },
});

export const { activeModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
