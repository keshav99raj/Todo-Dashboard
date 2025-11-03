

import { createSlice } from '@reduxjs/toolkit';

const thoughtSlice = createSlice({
  name: 'thought',
  initialState: {
    currentThought: "Let's finish the mobile app design today! 🚀"
  },
  reducers: {
    updateThought: (state, action) => {
      console.log("Updating thought from:", state.currentThought, "to:", action.payload);
      state.currentThought = action.payload;
    },
    clearThought: (state) => {
      state.currentThought = "";
    }
  }
});

export const { updateThought, clearThought } = thoughtSlice.actions;
export default thoughtSlice.reducer;