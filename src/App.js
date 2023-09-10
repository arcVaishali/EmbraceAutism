import './App.css';
import ViewEventsAdultSection from './AdultSection/Pages/ViewEventsAdultSection';
import react from '@heroicons/react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./AutismAppPages/AustismAppLanding";
import AdultHome from "./AutismAppPages/AdultHome";
import Footer from './AutismAppComponents/Footer';
import ChildHome from './AutismAppPages/ChildHome';

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
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
