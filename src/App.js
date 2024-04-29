import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import LandingPage from "./components/landingPage.component";
import ChallengePage from "./components/challengesPage.component";
import ChallengeDetailPage from "./components/challengeDetailPage.component";
import SolutionPage from "./components/solutionPage.component";
import LoginPage from "./components/loginPage.component";
import SignUpPage from "./components/SignUp.component";


function App() {
  return (
    <BrowserRouter>
    <div className="container">
      {/* if routing to any page that shouldnt invlove Navbar input that route here */}
        <Routes>
          <Route path="/*" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/challenge" element={<ChallengePage />} />
          <Route path="/challenge/:title" element={<ChallengeDetailPage />} />
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
        </Routes> 
      </div>
  </BrowserRouter>
  );
}

export default App;
