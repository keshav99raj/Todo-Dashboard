
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/slices/tasksSlice";

const TaskCard = ({ task, column }) => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const badgeClass =
    task.priority === "High"
      ? "bg-red-100 text-red-600"
      : task.priority === "Low"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-green-100 text-green-600";

  const dueDateClass = 
    task.dueDate === "Today" 
      ? "bg-red-100 text-red-600"
      : task.dueDate === "Tomorrow"
      ? "bg-orange-100 text-orange-600"
      : "bg-blue-100 text-blue-600";

  const handleDelete = () => {
    const columnKey = column === 'To Do' ? 'todoTasks' : 
                     column === 'On Progress' ? 'inProgressTasks' : 'doneTasks';
    dispatch(deleteTask({ column: columnKey, taskId: task.id }));
    setShowMenu(false);
  };

  // Drag start handler
  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
    e.dataTransfer.setData("fromColumn", column);
    e.currentTarget.classList.add("opacity-50");
  };

  // Drag end handler
  const handleDragEnd = (e) => {
    e.currentTarget.classList.remove("opacity-50");
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm border p-4 mb-4 relative cursor-grab active:cursor-grabbing"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-2">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${badgeClass}`}>
            {task.priority}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${dueDateClass}`}>
            {task.dueDate}
          </span>
        </div>
        <div className="relative">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-400 hover:text-gray-600"
          >
            •••
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <button
                onClick={handleDelete}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <h4 className="font-semibold mt-3">{task.title}</h4>
      <p className="text-sm text-gray-500 mt-1">{task.desc}</p>

      <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
        <div className="flex -space-x-2">
          {task.avatars?.map((a, idx) => (
            <img
              key={idx}
              src={`https://i.pravatar.cc/24?img=${a}`}
              alt="avatar"
              className="w-6 h-6 rounded-full border"
            />
          ))}
        </div>
        <div>12 comments · 0 files</div>
      </div>
    </div>
  );
};

export default TaskCard;