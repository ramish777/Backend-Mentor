import React from "react";
import {
	ChallengesIcon,
	CommunityIcon,
	MentorsIcon,
	NotificationsIcon,
	SearchIcon,
	SettingsIcon,
	SolutionsIcon,
} from "../assets/icons";
import "./styles.css";
import FeatherIcon from "feather-icons-react";

import { NavLink } from "react-router-dom";

export default function SideMenu() {
	// Component for each menu item
	const SideMenuItem = ({ icon, title, to }) => {
		return (
			<NavLink
				to={to}
				className={({ isActive }) =>
					"side-menu-item" + (isActive ? " active" : "")
				}
				style={{ textDecoration: "none", color: "inherit" }}
			>
				<img src={icon} alt="" />
				<p>{title}</p>
			</NavLink>
		);
	};

	return (
		<div className="side-menu">
			<div style={{ width: "100%" }}>
				<SideMenuItem
					icon={ChallengesIcon}
					title="Challenges"
					to="/challenges"
				/>
				<SideMenuItem
					icon={SolutionsIcon}
					title="Solutions"
					to="/solutions"
				/>
				<SideMenuItem
					icon={CommunityIcon}
					title="Community"
					to="/community"
				/>
				<SideMenuItem
					icon={MentorsIcon}
					title="Mentors"
					to="/mentors"
				/>
				<div className="divider" />
				<SideMenuItem
					icon={NotificationsIcon}
					title="Notifications"
					to="/notifications"
				/>
				<SideMenuItem
					icon={SettingsIcon}
					title="Settings"
					to="/settings"
				/>
			</div>
			<div className="side-menu-item">
				<div className="avatar" />
				<p>R. Kevin</p>{" "}
				{/* Removed the double quotes around the name */}
				<img src={SearchIcon} alt="" />
				{/* If FeatherIcon is a component, make sure it is imported */}
				<FeatherIcon icon="log-out" size={18} />
			</div>
		</div>
	);
}
