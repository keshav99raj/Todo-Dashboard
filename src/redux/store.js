
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';
import filtersReducer from './slices/filtersSlice';
import thoughtsReducer from './slices/thoughtSlice'; // Add this import

// Lod state from lcalStrge
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

// Savingng state to lcalStrge
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch {
    //error part. in future update it
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,// from taskslice
    filters: filtersReducer, // from filterslice
    thought: thoughtsReducer, //from thoughslice
  },
  preloadedState,
});

// sbuscribe to store the lcalstrge
store.subscribe(() => {
  saveState(store.getState());
});

export default store;