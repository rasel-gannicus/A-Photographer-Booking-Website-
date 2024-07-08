import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminRole : false
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    
    toggleAdminRole : (state, action) => {
        state.adminRole = action.payload
    }
    
  },
});

export const { toggleAdminRole } = adminSlice.actions;
export default adminSlice.reducer;
