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
         <div className="p-2 rounded-md bg-gray-100">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2V5" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 2V5" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.5 9.09H20.5" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.9955 13.7H12.0045" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.29431 13.7H8.30329" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.29431 16.7H8.30329" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>
        <div className="p-2 rounded-md bg-gray-100">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 11.36V11.15C12 10.47 12.42 10.11 12.84 9.82001C13.25 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.92 6.85999 12 6.85999C11.08 6.85999 10.34 7.60002 10.34 8.52002" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.9955 13.75H12.0045" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div className="p-2 rounded-md bg-gray-100">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
              <path d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.89999 21.18C9.35999 20.64 9.01999 19.88 9.01999 19.06" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10"/>
              <circle cx="18" cy="4" r="3" fill="#D8727D"/>
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