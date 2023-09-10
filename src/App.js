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
<<<<<<< HEAD

      {/* If user chooses to adult section then=> */}
      <AdultHome/>
      {/* <ViewEventsAdultSection/> */}
      <ShareStories/>
=======
>>>>>>> 1bb4055c332f910cf5cd1821c01cf0192e3d9fd6
    </div>
  );
}

export default App;
