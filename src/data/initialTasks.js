
export const initialTasks = {
  todoTasks: [
    {
      id: 't1',
      title: "Brainstorming",
      desc: "Brainstorming brings team members' diverse experience into play.",
      priority: "Low",
      dueDate: "Today",
      avatars: [1, 2, 3]
    },
    {
      id: 't2',
      title: "Research",
      desc: "User research helps you to create an optimal product for users.",
      priority: "High",
      dueDate: "Tomorrow",
      avatars: [4, 5]
    }
  ],
  inProgressTasks: [
    {
      id: 'p1',
      title: "Design system",
      desc: "Create reusable components and tokens.",
      priority: "Low",
      dueDate: "This Week",
      avatars: [2, 3]
    }
  ],
  doneTasks: [
    {
      id: 'd1',
      title: "Onboarding flow",
      desc: "Completed onboarding screens and interactions.",
      priority: "Completed",
      dueDate: "Today",
      avatars: [1]
    }
  ]
};