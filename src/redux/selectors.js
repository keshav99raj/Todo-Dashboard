
export const getFilteredTasks = (state) => {
  const { searchTerm, category, dueDate, priority } = state.filters;
  const { todoTasks, inProgressTasks, doneTasks } = state.tasks;

  const filterTasks = (tasks) => {
    return tasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          task.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPriority = priority === 'All' || task.priority === priority;
      const matchesDueDate = dueDate === 'All' || task.dueDate === dueDate;
      const matchesCategory = category === 'All' || true; // You can implement category logic later

      return matchesSearch && matchesPriority && matchesDueDate && matchesCategory;
    });
  };

  return {
    todoTasks: filterTasks(todoTasks),
    inProgressTasks: filterTasks(inProgressTasks),
    doneTasks: filterTasks(doneTasks)
  };
};