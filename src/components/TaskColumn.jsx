import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getFilteredTasks } from "../redux/selectors";
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";

const TaskColumn = ({ title, borderColor }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const filteredTasks = useSelector(getFilteredTasks);

  let tasks = [];
  if (title === "To Do") tasks = filteredTasks.todoTasks;
  else if (title === "On Progress") tasks = filteredTasks.inProgressTasks;
  else tasks = filteredTasks.doneTasks;

  return (
    <>
      <div className="flex-1 min-w-[300px]">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg">
            {title} <span className="text-sm text-gray-400 ml-2">({tasks.length})</span>
          </h3>
          <button 
            onClick={() => setShowAddModal(true)}
            className="text-white bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-700"
          >
            +
          </button>
        </div>

        <div className={`${borderColor} border-t-4 rounded-md p-4 bg-white shadow-sm min-h-[200px]`}>
          {tasks.map((t) => (
            <TaskCard key={t.id} task={t} column={title} />
          ))}
          {tasks.length === 0 && (
            <p className="text-gray-400 text-center py-4">No tasks found</p>
          )}
        </div>
      </div>

      <AddTaskModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        column={title}
      />
    </>
  );
};

export default TaskColumn;