// import logo from './logo.svg';
import './App.css';
import ViewEventsAdultSection from './AdultSection/Pages/ViewEventsAdultSection';
import react from '@heroicons/react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./AutismAppPages/AustismAppLanding";
import AdultHome from "./AutismAppPages/AdultHome";

function App() {
  return (
    <div>
      <div>
      
      </div>
      <Router>
        <Routes>
        
          <Route path="/adult" element={<AdultHome />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
