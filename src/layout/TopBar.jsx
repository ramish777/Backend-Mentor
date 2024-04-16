import React from "react";

import Logo from "../assets/logo.svg";
import { SearchIcon } from "../assets/icons";
import { Link } from "react-router-dom";

import "./styles.css";

export default function TopBar() {
	const SearchBar = () => {
		return (
			<div className="search-bar">
				<img src={SearchIcon} alt="" />
				<input type="text" placeholder="Search" />
			</div>
		);
	};

	return (
		<nav
			className="d-flex align-center space-between py-3 px-8"
			style={{
				backgroundColor: "#101323",
				borderBottom: "1px solid #363F72",
			}}
		>
			<img src={Logo} alt="" className="logo" />
			<SearchBar />
			<div className="d-flex gap-4 align-center nav-items">
				<Link to="/hackathons">Hackathons</Link>
				<Link to="/faqs">FAQs</Link>
			</div>
		</nav>
	);
}
