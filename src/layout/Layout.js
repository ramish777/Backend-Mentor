import React from "react";
import TopBar from "./TopBar";
import SideMenu from "./SideMenu";

import "./styles.css";

const Layout = ({ children }) => {
	return (
		<div>
			<TopBar />
			<div className="main-content-container">
				<SideMenu />
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
