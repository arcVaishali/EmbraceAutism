import logo from './logo.svg';
import './App.css';
import ViewEventsAdultSection from './AdultSection/Pages/ViewEventsAdultSection';
import react from '@heroicons/react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

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

      <ViewEventsAdultSection/>
    </div>
  );
}

export default App;
