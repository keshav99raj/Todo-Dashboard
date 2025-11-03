// // import { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { setCategory, setDueDate, setPriority, clearFilters } from "../redux/slices/filtersSlice";

// // export default function FilterDropdown() {
// //   const [open, setOpen] = useState(false);
// //   const dispatch = useDispatch();
// //   const { category, dueDate, priority } = useSelector(state => state.filters);

// //   const handleFilterSelect = (filterType, value) => {
// //     switch (filterType) {
// //       case 'category':
// //         dispatch(setCategory(value));
// //         break;
// //       case 'dueDate':
// //         dispatch(setDueDate(value));
// //         break;
// //       case 'priority':
// //         dispatch(setPriority(value));
// //         break;
// //       default:
// //         break;
// //     }
// //     setOpen(false);
// //   };

// //   const handleClearFilters = () => {
// //     dispatch(clearFilters());
// //     setOpen(false);
// //   };

// //   return (
// //     <div className="relative inline-block text-left">
// //       <button
// //         onClick={() => setOpen(!open)}
// //         className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1.5 text-gray-600 hover:bg-gray-50"
// //       >
// //         <svg
// //           xmlns="http://www.w3.org/2000/svg"
// //           className="w-4 h-4 text-gray-500"
// //           fill="none"
// //           viewBox="0 0 24 24"
// //           stroke="currentColor"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth={1.5}
// //             d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 13.414V20a1 1 0 01-1.447.894l-4-2A1 1 0 018 18v-4.586L3.293 6.707A1 1 0 013 6V4z"
// //           />
// //         </svg>
// //         <span>Filter</span>
// //         <svg
// //           xmlns="http://www.w3.org/2000/svg"
// //           className="w-4 h-4 text-gray-400"
// //           fill="none"
// //           viewBox="0 0 24 24"
// //           stroke="currentColor"
// //         >
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// //         </svg>
// //       </button>

// //       {open && (
// //         <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10">
// //           <div className="p-2 border-b">
// //             <span className="text-xs font-semibold text-gray-500">Task Category</span>
// //             <select 
// //               className="w-full mt-1 border rounded px-2 py-1 text-sm"
// //               value={category}
// //               onChange={(e) => handleFilterSelect('category', e.target.value)}
// //             >
// //               <option value="All">All Categories</option>
// //               <option value="Design">Design</option>
// //               <option value="Development">Development</option>
// //               <option value="Research">Research</option>
// //             </select>
// //           </div>
          
// //           <div className="p-2 border-b">
// //             <span className="text-xs font-semibold text-gray-500">Due Date</span>
// //             <select 
// //               className="w-full mt-1 border rounded px-2 py-1 text-sm"
// //               value={dueDate}
// //               onChange={(e) => handleFilterSelect('dueDate', e.target.value)}
// //             >
// //               <option value="All">All Dates</option>
// //               <option value="Today">Today</option>
// //               <option value="Tomorrow">Tomorrow</option>
// //               <option value="This Week">This Week</option>
// //             </select>
// //           </div>
          
// //           <div className="p-2 border-b">
// //             <span className="text-xs font-semibold text-gray-500">Priority</span>
// //             <select 
// //               className="w-full mt-1 border rounded px-2 py-1 text-sm"
// //               value={priority}
// //               onChange={(e) => handleFilterSelect('priority', e.target.value)}
// //             >
// //               <option value="All">All Priorities</option>
// //               <option value="High">High</option>
// //               <option value="Low">Low</option>
// //               <option value="Completed">Completed</option>
// //             </select>
// //           </div>
          
// //           <button
// //             onClick={handleClearFilters}
// //             className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-100 border-t"
// //           >
// //             Clear All Filters
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCategory, setDueDate, setPriority, clearFilters } from "../redux/slices/filtersSlice";

// export default function FilterDropdown() {
//   const [open, setOpen] = useState(false);
//   const dispatch = useDispatch();
//   const { category, dueDate, priority } = useSelector(state => state.filters);

//   const handleFilterSelect = (filterType, value) => {
//     switch (filterType) {
//       case 'category':
//         dispatch(setCategory(value));
//         break;
//       case 'dueDate':
//         dispatch(setDueDate(value));
//         break;
//       case 'priority':
//         dispatch(setPriority(value));
//         break;
//       default:
//         break;
//     }
//     setOpen(false);
//   };

//   const handleClearFilters = () => {
//     dispatch(clearFilters());
//     setOpen(false);
//   };

//   return (
//     <div className="relative inline-block text-left">
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1.5 text-gray-600 hover:bg-gray-50"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-4 h-4 text-gray-500"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={1.5}
//             d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 13.414V20a1 1 0 01-1.447.894l-4-2A1 1 0 018 18v-4.586L3.293 6.707A1 1 0 013 6V4z"
//           />
//         </svg>
//         <span>Filter</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-4 h-4 text-gray-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {open && (
//         <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10">
//           <div className="p-2 border-b">
//             <span className="text-xs font-semibold text-gray-500">Task Category</span>
//             <select 
//               className="w-full mt-1 border rounded px-2 py-1 text-sm"
//               value={category}
//               onChange={(e) => handleFilterSelect('category', e.target.value)}
//             >
//               <option value="All">All Categories</option>
//               <option value="Design">Design</option>
//               <option value="Development">Development</option>
//               <option value="Research">Research</option>
//             </select>
//           </div>
          
//           <div className="p-2 border-b">
//             <span className="text-xs font-semibold text-gray-500">Due Date</span>
//             <select 
//               className="w-full mt-1 border rounded px-2 py-1 text-sm"
//               value={dueDate}
//               onChange={(e) => handleFilterSelect('dueDate', e.target.value)}
//             >
//               <option value="All">All Dates</option>
//               <option value="Today">Today</option>
//               <option value="Tomorrow">Tomorrow</option>
//               <option value="This Week">This Week</option>
//             </select>
//           </div>
          
//           <div className="p-2 border-b">
//             <span className="text-xs font-semibold text-gray-500">Priority</span>
//             <select 
//               className="w-full mt-1 border rounded px-2 py-1 text-sm"
//               value={priority}
//               onChange={(e) => handleFilterSelect('priority', e.target.value)}
//             >
//               <option value="All">All Priorities</option>
//               <option value="High">High</option>
//               <option value="Low">Low</option>
//               <option value="Completed">Completed</option>
//             </select>
//           </div>
          
//           <button
//             onClick={handleClearFilters}
//             className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-100 border-t"
//           >
//             Clear All Filters
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


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
        
        {/* Down arrow */}
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

      {/* Dropdown */}
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