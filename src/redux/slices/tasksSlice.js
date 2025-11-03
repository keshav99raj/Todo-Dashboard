import { createSlice } from '@reduxjs/toolkit';
import { initialTasks } from '../../data/initialTasks';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialTasks,
  reducers: {
    addTask: (state, action) => {
      const { column, task } = action.payload;
      state[column].push({
        ...task,
        id: Date.now().toString(),
        avatars: [1] // default avatar
      });
    },
    deleteTask: (state, action) => {
      const { column, taskId } = action.payload;
      state[column] = state[column].filter(task => task.id !== taskId);
    },
    moveTask: (state, action) => {
      const { fromColumn, toColumn, taskId } = action.payload;
      const taskIndex = state[fromColumn].findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        const task = state[fromColumn][taskIndex];
        state[fromColumn].splice(taskIndex, 1);
        state[toColumn].push(task);
      }
    },
    updateTask: (state, action) => {
      const { column, taskId, updates } = action.payload;
      const taskIndex = state[column].findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        state[column][taskIndex] = { ...state[column][taskIndex], ...updates };
      }
    }
  }
});

export const { addTask, deleteTask, moveTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;