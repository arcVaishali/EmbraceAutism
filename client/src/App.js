import './App.css';
import react from '@heroicons/react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./AutismAppPages/AustismAppLanding";
import AdultHome from "./AutismAppPages/AdultHome";
import Footer from './AutismAppComponents/Footer';
import ChildHome from './ChildSection/ChildHome';
import ShareStories from './AdultSection/Pages/ShareStories';
import Volunteer from './AdultSection/Pages/Volunteer';
import Features from "./AdultSection/Pages/Features";
import Videos from './ChildSection/Videos';
import Puzzles from './ChildSection/Puzzles';
import Games from './ChildSection/Games';
import VolunteerForm from './AdultSection/Pages/VolunteerForm'
import ViewEventsAdultSection from './AdultSection/Pages/ViewEventsAdultSection';
import CourseCompletion from './ChildSection/CourseCompletion';

import About from './AutismAppPages/About';
import Team from './AutismAppPages/Team';

import Profile from './AutismAppPages/Profile';
import Story from './AdultSection/components/Story';
import Login from './AutismAppPages/Login';
import Signup from './AutismAppPages/Signup';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} exact />
          <Route path='/login' element={<Login />} exact />
          <Route path='/signup' element={<Signup />} exact />
          <Route path="/adult" element={<AdultHome />} exact />
          <Route path="/child" element={<ChildHome />} exact />
          <Route path="/games" element={<Games />} exact />
          <Route path="/videos" element={<Videos />} exact />
          <Route path="/child/puzzles" element={<Puzzles />} exact />
          <Route path='/adult/ViewEventsAdultSection' element={<ViewEventsAdultSection/>} exact/>
          <Route path='/adult/Volunteer' element={<Volunteer/>} exact/>
          <Route path='/adult/Volunteer/VolunteerForm' element={<VolunteerForm/>} exact/>
          <Route path='/adult/Volunteer/VolunteerForm/Volunteer' element={<Volunteer/>} exact/>
          <Route path='/adult/Features' element={<Features/>} exact/>
          <Route path='/adult/ShareStories' element={<ShareStories/>} exact/>
          <Route path="/child/videos" element={<Videos />} exact />
          <Route path='/course-completed' element={<CourseCompletion/>} exact/>

          <Route path='/About-us' element={<About/>} exact/>
          <Route path='/About-us/Home' element={<Landing/>} exact/>
          <Route path='/About-us/child' element={<ChildHome/>} exact/>
          <Route path='/About-us/adult' element={<AdultHome/>} exact/>
          <Route path='/About-us/team' element={<Team/>} exact/>

          <Route path='/profile' element={<Profile/>} exact/>
          <Route path='/adult/ShareStories/story' element={<Story/>} exact/>

        </Routes>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
