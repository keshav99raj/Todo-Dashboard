
import React from "react";
import { Provider } from 'react-redux';
import store from './redux/store';
import DashboardPage from "./pages/dashboard.jsx";


import './App.css'

function App() {
 

  return (
    
     <Provider store={store}>
      <DashboardPage />
    </Provider>
    
  )
}

export default App


