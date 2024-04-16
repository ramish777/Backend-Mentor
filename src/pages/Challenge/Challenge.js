import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SizedBox from "../../components/SizedBox";

import "./Challenge.css";
import Avvvatars from "avvvatars-react";

const commentsData = [
	{
		author: "Alice Johnson",
		date: "2024-04-14T08:00:00.000Z",
		text: "This is a very insightful article. Thanks for sharing!",
	},
	{
		author: "Bob Smith",
		date: "2024-04-14T09:15:00.000Z",
		text: "I have a question about the second paragraph... could you elaborate?",
	},
	{
		author: "Charlie Doe",
		date: "2024-04-14T11:30:00.000Z",
		text: "Great read! I'm looking forward to more posts like this.",
	},
	{
		author: "Diana Rey",
		date: "2024-04-14T13:45:00.000Z",
		text: "I disagree with the point about economic growth, and here's why...",
	},
];

export default function Challenge() {
	const [challengeDetails, setChallengeDetails] = React.useState({
		title: "E-Commerce API",
		description:
			"To build a robust and secure RESTful API for an e-commerce platform that handles product management, user authentication, shopping cart functionalities, order management, and payment integration.",
	});
	return (
		<div className="main-content-container">
			<div className="challenge-details-container">
				<div className="challenge-header-info">
					<Breadcrumb
						paths={[
							{ name: "Challenges", path: "/challenges" },
							{
								name: "E-Commerce API",
								path: "/challenges/e-commerce-api",
							},
						]}
					/>
					<SizedBox height="24px" />
					<h1>{challengeDetails?.title}</h1>
					<SizedBox height="20px" />
					<p className="description">
						{challengeDetails.description}
					</p>
					<SizedBox height="32px" />
					<div className="action-buttons">
						<button className="primary">Take Challenge</button>
						<button className="secondary">Downlaod Assets</button>
					</div>
				</div>
				<div className="divider" />
				<div className="challenge-comments">
					<h3>Comments & Feedback</h3>
					<div className="challenge-comments-container">
						{commentsData.map((comment, index) => (
							<Comment key={index} comment={comment} />
						))}
					</div>
				</div>
			</div>
			<div className="project-details">
				<h2>Project Details</h2>
			</div>
		</div>
	);
}

const Comment = ({ comment }) => {
	return (
		<div className="comment-container">
			<div className="comment-header">
				<Avvvatars value={comment.author} />
				<div className="comment-header-content">
					<p className="comment-author">{comment.author}</p>
					<p className="comment-date">{comment.date}</p>
				</div>
			</div>
			<p className="comment-description">{comment.text}</p>
		</div>
	);
};
