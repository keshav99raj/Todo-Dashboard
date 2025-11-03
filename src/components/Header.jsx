
import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/slices/filtersSlice";
import avatar from "../assets/avatar.jpg";

const Header = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header className="flex justify-between items-center bg-white p-4 border-b">
      {/* search box */}
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search for anything..."
          onChange={handleSearchChange}
          className="bg-gray-100 pl-10 pr-3 py-2 rounded-md outline-none w-80 text-sm"
        />
      </div>

      {/*rght prfl and icn*/}
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-md bg-gray-100">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5" stroke="#787486" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 2V5" stroke="#787486" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.5 9.09H20.5" stroke="#787486" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke="#787486" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
          </svg>
        </div>

        <div className="flex items-center gap-3">
          <div>
            <p className="text-sm font-medium">Keshavraj Singh</p>
            <p className="text-xs text-gray-500">Rajasthan, India</p>
          </div>
          <img src={avatar} alt="avatar" className="w-9 h-9 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
