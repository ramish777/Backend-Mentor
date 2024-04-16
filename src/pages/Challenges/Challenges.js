import React from "react";

import "./Challenges.css";
import FeatherIcon from "feather-icons-react";

export default function Challenges() {
	const ChallengeCard = ({ title, description, solutionsAvailable }) => {
		return (
			<div className="challenge-card">
				<div className="text-content">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>

				<div className="action-buttons">
					<button>View Details</button>
					<p>{solutionsAvailable} Solutions Available</p>
				</div>
			</div>
		);
	};

	return (
		<div className="main-content-container">
			<div className="challenges-container">
				<div className="challenges-grid">
					<ChallengeCard
						title="E-Commerce API"
						description="To build a robust and secure RESTful API for an e-commerce platform that handles product management, user authentication, shopping cart functionalities, order management, and payment integration."
						solutionsAvailable={5}
					/>
					<ChallengeCard
						title="Challenge 2"
						description="This is the second challenge"
						solutionsAvailable={3}
					/>
					<ChallengeCard
						title="Challenge 3"
						description="This is the third challenge"
						solutionsAvailable={2}
					/>
					<ChallengeCard
						title="Challenge 4"
						description="This is the fourth challenge"
						solutionsAvailable={1}
					/>
				</div>
			</div>
			<div className="challenges-filters-container">
				<h4>Filters</h4>
				<FilterAccordion
					title="Difficulty"
					options={["Beginner", "Intermediate", "Advanced"]}
				/>
				<FilterAccordion
					title="Languages"
					options={["Python", "JavaScript", "Java", "C++", "C#"]}
				/>
			</div>
		</div>
	);
}

const FilterAccordion = ({ title, options }) => {
	const [isOpen, setIsOpen] = React.useState(true);
	// create a filter item component with a checkbox
	const FilterItem = ({ option }) => {
		return (
			<div className="filter-item">
				<input type="checkbox" />
				<label>{option}</label>
			</div>
		);
	};

	return (
		<div className="filter-accordion">
			<div className="row" onClick={() => setIsOpen(true)}>
				<h4>{title}</h4>
				{/* <FeatherIcon icon="chevron-down" /> */}
			</div>

			{isOpen &&
				options.map((value, index) => (
					<FilterItem key={index} option={value} />
				))}
		</div>
	);
};
