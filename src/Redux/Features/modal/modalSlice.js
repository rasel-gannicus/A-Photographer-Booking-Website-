import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalShow: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    activeModal : (state, action)=>{
        state.modalShow = true ;
    },
    
    hideModal : (state, action)=>{
        state.modalShow = false ;
    },
    
  },
});

export const { activeModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
