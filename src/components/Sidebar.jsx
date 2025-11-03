import React from "react";

const Sidebar = () => {
//   const nav = ["Home", "Messages", "Tasks", "Members", "Settings"];
//   const projects = ["Mobile App", "Website Redesign", "Design System", "Wireframes"];

  return (
    <aside className="w-64 bg-white border-r px-5 py-6 flex flex-col">
      <div className="mb-6 flex item-center">

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path opacity="0.6" d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.24 3.88 10.9 6.42 10.21C7.11 11.95 8.59 13.29 10.42 13.79C10.92 13.93 11.45 14 12 14C12.55 14 13.08 13.93 13.58 13.79C13.85 14.47 14 15.22 14 16Z" fill="#5030E5"/>
         <path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill="#5030E5"/>
         <path opacity="0.4" d="M22 16C22 19.31 19.31 22 16 22C14.46 22 13.06 21.42 12 20.46C13.23 19.37 14 17.77 14 16C14 15.22 13.85 14.47 13.58 13.79C15.41 13.29 16.89 11.95 17.58 10.21C20.12 10.9 22 13.24 22 16Z" fill="#5030E5"/>
        </svg>

        <h2 className="text-xl font-bold">Project M.</h2>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {/* {nav.map((n) => (
            <li key={n} className="p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              {n}
            </li>
          ))} */}
           {/* <li  className="p-2 rounded-md hover:bg-gray-100 cursor-pointer flex item-center gap-1">
               <svg width="22" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M7 10.75H5C2.58 10.75 1.25 9.42 1.25 7V5C1.25 2.58 2.58 1.25 5 1.25H7C9.42 1.25 10.75 2.58 10.75 5V7C10.75 9.42 9.42 10.75 7 10.75ZM5 2.75C3.42 2.75 2.75 3.42 2.75 5V7C2.75 8.58 3.42 9.25 5 9.25H7C8.58 9.25 9.25 8.58 9.25 7V5C9.25 3.42 8.58 2.75 7 2.75H5Z" fill="#787486"/>
                 <path d="M19 10.75H17C14.58 10.75 13.25 9.42 13.25 7V5C13.25 2.58 14.58 1.25 17 1.25H19C21.42 1.25 22.75 2.58 22.75 5V7C22.75 9.42 21.42 10.75 19 10.75ZM17 2.75C15.42 2.75 14.75 3.42 14.75 5V7C14.75 8.58 15.42 9.25 17 9.25H19C20.58 9.25 21.25 8.58 21.25 7V5C21.25 3.42 20.58 2.75 19 2.75H17Z" fill="#787486"/>
                 <path d="M19 22.75H17C14.58 22.75 13.25 21.42 13.25 19V17C13.25 14.58 14.58 13.25 17 13.25H19C21.42 13.25 22.75 14.58 22.75 17V19C22.75 21.42 21.42 22.75 19 22.75ZM17 14.75C15.42 14.75 14.75 15.42 14.75 17V19C14.75 20.58 15.42 21.25 17 21.25H19C20.58 21.25 21.25 20.58 21.25 19V17C21.25 15.42 20.58 14.75 19 14.75H17Z" fill="#787486"/>
                 <path d="M7 22.75H5C2.58 22.75 1.25 21.42 1.25 19V17C1.25 14.58 2.58 13.25 5 13.25H7C9.42 13.25 10.75 14.58 10.75 17V19C10.75 21.42 9.42 22.75 7 22.75ZM5 14.75C3.42 14.75 2.75 15.42 2.75 17V19C2.75 20.58 3.42 21.25 5 21.25H7C8.58 21.25 9.25 20.58 9.25 19V17C9.25 15.42 8.58 14.75 7 14.75H5Z" fill="#787486"/>
               </svg>
               <p>Home</p>

               
            </li> */}
            <li className="p-2 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-2 ">
              <svg width="22" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M7 10.75H5C2.58 10.75 1.25 9.42 1.25 7V5C1.25 2.58 2.58 1.25 5 1.25H7C9.42 1.25 10.75 2.58 10.75 5V7C10.75 9.42 9.42 10.75 7 10.75ZM5 2.75C3.42 2.75 2.75 3.42 2.75 5V7C2.75 8.58 3.42 9.25 5 9.25H7C8.58 9.25 9.25 8.58 9.25 7V5C9.25 3.42 8.58 2.75 7 2.75H5Z" fill="#787486"/>
               <path d="M19 10.75H17C14.58 10.75 13.25 9.42 13.25 7V5C13.25 2.58 14.58 1.25 17 1.25H19C21.42 1.25 22.75 2.58 22.75 5V7C22.75 9.42 21.42 10.75 19 10.75ZM17 2.75C15.42 2.75 14.75 3.42 14.75 5V7C14.75 8.58 15.42 9.25 17 9.25H19C20.58 9.25 21.25 8.58 21.25 7V5C21.25 3.42 20.58 2.75 19 2.75H17Z" fill="#787486"/>
               <path d="M19 22.75H17C14.58 22.75 13.25 21.42 13.25 19V17C13.25 14.58 14.58 13.25 17 13.25H19C21.42 13.25 22.75 14.58 22.75 17V19C22.75 21.42 21.42 22.75 19 22.75ZM17 14.75C15.42 14.75 14.75 15.42 14.75 17V19C14.75 20.58 15.42 21.25 17 21.25H19C20.58 21.25 21.25 20.58 21.25 19V17C21.25 15.42 20.58 14.75 19 14.75H17Z" fill="#787486"/>
               <path d="M7 22.75H5C2.58 22.75 1.25 21.42 1.25 19V17C1.25 14.58 2.58 13.25 5 13.25H7C9.42 13.25 10.75 14.58 10.75 17V19C10.75 21.42 9.42 22.75 7 22.75ZM5 14.75C3.42 14.75 2.75 15.42 2.75 17V19C2.75 20.58 3.42 21.25 5 21.25H7C8.58 21.25 9.25 20.58 9.25 19V17C9.25 15.42 8.58 14.75 7 14.75H5Z" fill="#787486"/>
              </svg>
             <p>Home</p>
            </li>
            <li className="p-2 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-2 ">
              <svg width="22" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M15.9965 11H16.0054" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M11.9955 11H12.0045" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M7.99451 11H8.00349" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

             <p>Messages</p>
            </li>
            <li className="p-2 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-2 ">
              <svg width="22" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12.37 8.88H17.62" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.38 8.88L7.13 9.63L9.38 7.38" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.37 15.88H17.62" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.38 15.88L7.13 16.63L9.38 14.38" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>

             <p>Tasks</p>
            </li>
            <li className="p-2 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-2 ">
              <svg width="22" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M7 10.75H5C2.58 10.75 1.25 9.42 1.25 7V5C1.25 2.58 2.58 1.25 5 1.25H7C9.42 1.25 10.75 2.58 10.75 5V7C10.75 9.42 9.42 10.75 7 10.75ZM5 2.75C3.42 2.75 2.75 3.42 2.75 5V7C2.75 8.58 3.42 9.25 5 9.25H7C8.58 9.25 9.25 8.58 9.25 7V5C9.25 3.42 8.58 2.75 7 2.75H5Z" fill="#787486"/>
               <path d="M19 10.75H17C14.58 10.75 13.25 9.42 13.25 7V5C13.25 2.58 14.58 1.25 17 1.25H19C21.42 1.25 22.75 2.58 22.75 5V7C22.75 9.42 21.42 10.75 19 10.75ZM17 2.75C15.42 2.75 14.75 3.42 14.75 5V7C14.75 8.58 15.42 9.25 17 9.25H19C20.58 9.25 21.25 8.58 21.25 7V5C21.25 3.42 20.58 2.75 19 2.75H17Z" fill="#787486"/>
               <path d="M19 22.75H17C14.58 22.75 13.25 21.42 13.25 19V17C13.25 14.58 14.58 13.25 17 13.25H19C21.42 13.25 22.75 14.58 22.75 17V19C22.75 21.42 21.42 22.75 19 22.75ZM17 14.75C15.42 14.75 14.75 15.42 14.75 17V19C14.75 20.58 15.42 21.25 17 21.25H19C20.58 21.25 21.25 20.58 21.25 19V17C21.25 15.42 20.58 14.75 19 14.75H17Z" fill="#787486"/>
               <path d="M7 22.75H5C2.58 22.75 1.25 21.42 1.25 19V17C1.25 14.58 2.58 13.25 5 13.25H7C9.42 13.25 10.75 14.58 10.75 17V19C10.75 21.42 9.42 22.75 7 22.75ZM5 14.75C3.42 14.75 2.75 15.42 2.75 17V19C2.75 20.58 3.42 21.25 5 21.25H7C8.58 21.25 9.25 20.58 9.25 19V17C9.25 15.42 8.58 14.75 7 14.75H5Z" fill="#787486"/>
              </svg>
             <p>Members</p>
            </li>
            <li className="p-2 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-2 ">
              <svg width="22" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

             <p>Settings</p>
            </li>

        </ul>

        <div className="mt-8">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-500 mb-3">MY PROJECTS</h3>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M5.33334 8H10.6667" stroke="#787486" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M8 10.6667V5.33333" stroke="#787486" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M6.00001 14.6667H10C13.3333 14.6667 14.6667 13.3333 14.6667 10V6C14.6667 2.66667 13.3333 1.33333 10 1.33333H6.00001C2.66668 1.33333 1.33334 2.66667 1.33334 6V10C1.33334 13.3333 2.66668 14.6667 6.00001 14.6667Z" stroke="#787486" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
          
          <ul className="space-y-1">
            {/* {projects.map((p) => (
              <li key={p} className="p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center justify-between">
                  <span>{p}</span>
                </div>
              </li>
            ))} */}
            <li  className="p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                   <p className="font-semibold text-gray-800">Mobile App</p>
                  </div>
                </div>
              </li>
              <li  className="p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                   <p className="font-semibold text-gray-800">Website Redesign</p>
                  </div>
                </div>
              </li>
              <li  className="p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-purple-300 rounded-full"></span>
                   <p className="font-semibold text-gray-800">Design System</p>
                  </div>
                </div>
              </li>
              <li  className="p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span>
                   <p className="font-semibold text-gray-800">Wireframes</p>
                  </div>
                </div>
              </li>
        
          </ul>
        </div>
      </nav>

      <div className="mt-auto bg-gray-200 p-4 rounded-lg text-center flex  flex-col items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M19.21 6.36C18.17 4.26 16.16 2.71 13.83 2.2C11.39 1.66 8.88997 2.24 6.97997 3.78C5.05997 5.31 3.96997 7.6 3.96997 10.05C3.96997 12.64 5.51997 15.35 7.85997 16.92V17.75C7.84997 18.03 7.83997 18.46 8.17997 18.81C8.52997 19.17 9.04997 19.21 9.45997 19.21H14.59C15.13 19.21 15.54 19.06 15.82 18.78C16.2 18.39 16.19 17.89 16.18 17.62V16.92C19.28 14.83 21.23 10.42 19.21 6.36Z" fill="#FBCB18"/>
         <path d="M15.26 22C15.2 22 15.13 21.99 15.07 21.97C13.06 21.4 10.95 21.4 8.93997 21.97C8.56997 22.07 8.17997 21.86 8.07997 21.49C7.96997 21.12 8.18997 20.73 8.55997 20.63C10.82 19.99 13.2 19.99 15.46 20.63C15.83 20.74 16.05 21.12 15.94 21.49C15.84 21.8 15.56 22 15.26 22Z" fill="#FBCB18"/>
        </svg>

        <p className="text-sm font-bold">Thoughts Time</p>
        <p className="text-xs text-gray-500 mb-3">You can share your thoughts with your peers.</p>
        <button className="text-xs bg-white shadow px-3 py-1 rounded">Write a message</button>
      </div>
    </aside>
  );
};

export default Sidebar;
