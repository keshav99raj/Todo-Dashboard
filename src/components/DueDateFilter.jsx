
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDueDate } from "../redux/slices/filtersSlice";

export default function DueDateFilter() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { dueDate } = useSelector(state => state.filters);

  const options = ["Today", "Tomorrow", "This Week", "All Dates"];

  const handleSelect = (option) => {
    if (option === "All Dates") {
      dispatch(setDueDate("All"));
    } else {
      dispatch(setDueDate(option));
    }
    setOpen(false);
  };

  const getDisplayText = () => {
    if (dueDate === "All") return "Today";
    return dueDate;
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1.5 text-gray-600 hover:bg-gray-50"
      >
        <span>{getDisplayText()}</span>
        
        {/* Down arrow using react heroicon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown  layout*/}
      {open && (
        <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-100 ${
                (option === "Today" && dueDate === "All") || 
                (option !== "All Dates" && dueDate === option) ? 'bg-blue-50 text-blue-600' : ''
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}