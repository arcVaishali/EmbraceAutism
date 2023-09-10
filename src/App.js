import './App.css';
import ViewEventsAdultSection from './AdultSection/Pages/ViewEventsAdultSection';
import react from '@heroicons/react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./AutismAppPages/AustismAppLanding";
import AdultHome from "./AutismAppPages/AdultHome";
import ShareStories from './AdultSection/Pages/ShareStories';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Landing/>} exact/>
          <Route path="/adult" element={<AdultHome />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
