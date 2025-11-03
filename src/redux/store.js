import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';
import filtersReducer from './slices/filtersSlice';

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch  {
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch {
    // ignore errors
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
  preloadedState,
});

// Subscribe to store changes to save to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;