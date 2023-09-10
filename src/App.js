import './App.css';
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
import ViewEventsAdultSection from './AdultSection/Pages/ViewEventsAdultSection';

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
<<<<<<< HEAD
          <Route path="/puzzles" element={<Puzzles />} exact /> 
=======
          <Route path="/puzzles" element={<Puzzles />} exact />
          <Route path='/adult/ViewEventsAdultSection' element={<ViewEventsAdultSection/>} exact/>
>>>>>>> c6a3f07186bb6c037fd2bebee85a27eed7496dab
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
