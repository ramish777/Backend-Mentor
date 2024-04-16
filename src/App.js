import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import LandingPage from "./components/landingPage.component";
import ChallengePage from "./components/challengesPage.component";
import ChallengeDetailPage from "./components/challengeDetailPage.component";
import TopBar from "./layout/TopBar";
import SideMenu from "./layout/SideMenu";
import Challenges from "./pages/Challenges/Challenges";
import Challenge from "./pages/Challenge/Challenge";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} exact />
				<Route path="*" element={<DefaultLayout />} />
			</Routes>
		</BrowserRouter>
	);
}

function DefaultLayout() {
	return (
		<div>
			<TopBar />
			<div className="outer-container">
				<SideMenu />
				<Routes>
					<Route path="/challenges" element={<Challenges />} />
					<Route
						path="/challenges/challenge"
						element={<Challenge />}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
