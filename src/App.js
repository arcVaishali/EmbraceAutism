import './App.css';
import ViewEventsAdultSection from './AdultSection/Pages/ViewEventsAdultSection';
import react from '@heroicons/react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./AutismAppPages/AustismAppLanding";
import AdultHome from "./AutismAppPages/AdultHome";
import Footer from './AutismAppComponents/Footer';
import ChildHome from './AutismAppPages/Child/ChildHome';
import ShareStories from './AdultSection/Pages/ShareStories';
import Volunteer from './AdultSection/Pages/Volunteer';
import Features from "./AdultSection/Pages/Features";
import Videos from './AutismAppPages/Child/Videos';
import Puzzles from './AutismAppPages/Child/Puzzles';
import Games from './AutismAppPages/Child/Games';
import VolunteerForm from './AdultSection/Pages/VolunteerForm'

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Landing />} exact />
          <Route path="/adult" element={<AdultHome />} exact />
          <Route path="/child" element={<ChildHome />} exact />
          <Route path="/games" element={<Games />} exact />
          <Route path="/videos" element={<Videos />} exact />
          <Route path="/puzzles" element={<Puzzles />} exact />
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>

    </div>
  );
}

export default App;
