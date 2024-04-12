import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import LandingPage from "./components/landingPage.component";
import ChallengePage from "./components/challengesPage.component";
import ChallengeDetailPage from "./components/challengeDetailPage.component";


function App() {
  return (
    <BrowserRouter>
    <div className="container">
    <Navbar />
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/challenge" element={<ChallengePage />} />
      <Route path="/challenge/:title"  element={<ChallengeDetailPage />} />
    </Routes> 
    </div>
  </BrowserRouter>
  );
}

export default App;
