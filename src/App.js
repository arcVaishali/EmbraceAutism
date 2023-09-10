import './App.css';
import ViewEventsAdultSection from './AdultSection/Pages/ViewEventsAdultSection';
import react from '@heroicons/react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./AutismAppPages/AustismAppLanding";
import AdultHome from "./AutismAppPages/AdultHome";
import Footer from './AutismAppComponents/Footer';
import ChildHome from './AutismAppPages/ChildHome';
import ShareStories from './AdultSection/Pages/ShareStories';
import Volunteer from './AdultSection/Pages/Volunteer';
import Features from "./AdultSection/Pages/Features";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} exact />
          <Route path="/adult" element={<AdultHome />} exact />
          <Route path="/child" element={<ChildHome />} exact />
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>
      <Features/>
    </div>
  );
}

export default App;
