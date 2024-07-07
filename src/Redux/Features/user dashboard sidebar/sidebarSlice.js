import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarShow: false
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    activeSidebar : (state, action)=>{
        state.sidebarShow = true ;
    },
    
    hideSidebar : (state, action)=>{
        state.sidebarShow = false ;
    },
    
    toggleSidebar : (state, action) => {
        state.sidebarShow = action.payload
    }
    
  },
});

export const { activeSidebar, hideSidebar, toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
