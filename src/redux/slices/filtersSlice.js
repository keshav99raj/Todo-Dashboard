
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    searchTerm: '',
    category: 'All',
    dueDate: 'All',
    priority: 'All'
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setDueDate: (state, action) => {
      state.dueDate = action.payload;
    },
    setPriority: (state, action) => {
      state.priority = action.payload;
    },
    clearFilters: (state) => {
      state.searchTerm = '';
      state.category = 'All';
      state.dueDate = 'All';
      state.priority = 'All';
    }
  }
});

export const { setSearchTerm, setCategory, setDueDate, setPriority, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;