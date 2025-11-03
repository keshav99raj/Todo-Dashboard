
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setPriority, clearFilters } from "../redux/slices/filtersSlice";

export default function FilterDropdown() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const {  priority } = useSelector(state => state.filters);

  

  const handlePriorityChange = (value) => {
    dispatch(setPriority(value));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setOpen(false);
  };
  
  const getDisplayText = () => {
    if (priority === "All") return "Filter";
    return `Priority: ${priority}`;
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1.5 text-gray-600 hover:bg-gray-50"
      >
        {/* Filter icon from heroicon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 13.414V20a1 1 0 01-1.447.894l-4-2A1 1 0 018 18v-4.586L3.293 6.707A1 1 0 013 6V4z"
          />
        </svg>

        <span>{getDisplayText()}</span>

        {/* DownDrop down sbg  */}
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

      {open && (
        <div className="absolute mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-md z-10">
        
         
          
          {/* prity sectn */}
          <div className="p-3 border-b">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Priority</h4>
            <select 
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={priority}
              onChange={(e) => handlePriorityChange(e.target.value)}
            >
              <option value="All">All Priorities</option>
              <option value="High">High</option>
              <option value="Low">Low</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          
          {/* Clearing the  Filter Btn */}
          <button
            onClick={handleClearFilters}
            className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-gray-100 border-t"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}