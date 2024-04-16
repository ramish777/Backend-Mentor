import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ paths }) => {
	return (
		<div aria-label="breadcrumb">
			<ol className="breadcrumb">
				{paths.map((path, index) => {
					const isActive = index === paths.length - 1;
					return isActive ? (
						<li
							key={path.name}
							className="breadcrumb-item active"
							aria-current="page"
						>
							<Link to={path.path}>{path.name}</Link>
						</li>
					) : (
						<li key={path.name} className="breadcrumb-item">
							<Link to={path.path}>{path.name}</Link>
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default Breadcrumb;
