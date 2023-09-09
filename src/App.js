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
    </div>
  );
}

export default App;
