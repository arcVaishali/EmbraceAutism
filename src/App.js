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
          <Route path="/" element={<Landing />} exact />
        </Routes>
      </Router>

      {/* If user chooses to adult section then=> */}
      <AdultHome/>
    </div>
  );
}

export default App;
