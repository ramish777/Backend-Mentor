import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import LandingPage from "./components/landingPage.component";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
    <Navbar />
     <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes> 
    </div>
  </BrowserRouter>
  );
}

export default App;
