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
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search for anything..."
          className="bg-gray-100 px-3 py-2 rounded-md outline-none w-80 text-sm"
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex items-center gap-4">
        {/* Icons remain the same */}
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