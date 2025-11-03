# To do Dashboard using React
  - This project is a **task management dashboard UI** inspired by the [Creative Upaay Figma Design](https://www.figma.com/design/2joKVlIEH43PfO9pFfsX51/DASHBOARD-DESIGN-TASK---CREATIVE-UPAAY?node-id=0-1).  
- It is built using **React (Vite)** and **Tailwind CSS**, with clean modular components and ready structure for Redux integration.

 
- The application provides a clean, intuitive interface for managing tasks across different stages of completion - from "To Do" to "In Progress" to "Done".
- For state management I use REDUX -:application state is persistent using Local Storage. This means that tasks and their states will remain intact even after a page refresh.

## Project Structure 

src/  
├── components/          
│   ├── Sidebar.jsx      
│   ├── Header.jsx       
│   ├── TaskColumn.jsx   
│   └── FilterDropdown.jsx   
├── pages/        
│   └── DashboardPage.jsx        
└── App.jsx             

##  Features

-  Beautiful **dashboard layout**
-  Component-based architecture (Sidebar, Header, TaskColumn)
-  Styled with **Tailwind CSS**
- **In-memory state management** (temporary state using React hooks)
- Future support for **Redux Toolkit** and **drag-and-drop*