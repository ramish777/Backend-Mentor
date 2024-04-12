import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/challengePage.css';

const ChallengeCard = ({id, title, language, level, description }) => (
    <div className="box">
        <h2>{title}</h2>
        <div className="oneLine">
            <p className="language">{language}</p>
            <p>{level}</p>
        </div>
        <p>{description}</p>
        <Link to={`/challenge/${title}`}>
            <button className="try-now">Try Now</button>
        </Link>
    </div> 
);

export default class challengesPage extends Component {
    constructor(props){
        super(props);

        //declaring variables that will be used
        this.state = {
            challengeCards: [
                {id: 1, title: "Title 1", language: "HTML/CSS", level: "Basic", description: "Brief Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                {id: 2, title: "Title 2", language: "JavaScript", level: "Intermediate", description: "Another Brief Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                {id: 3, title: "Title 3", language: "HTML/CSS", level: "Basic", description: "Brief Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                {id: 4, title: "Title 4", language: "JavaScript", level: "Intermediate", description: "Another Brief Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                // Add more challenge card data here as needed
            ]
        };
    }

    render() {

        const { challengeCards } = this.state;

        return (
            <div className="challenge-page">
                <div className="content">
                    <div className="title">Challenges</div>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="sortByDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort By
                        </button>
                            <div class="dropdown-menu" aria-labelledby="sortByDropdown">
                                <button class="dropdown-item" type="button">Date</button>
                                <button class="dropdown-item" type="button">Difficulty</button>
                                <button class="dropdown-item" type="button">Popularity</button>
                        </div>

                        <button class="btn btn-secondary dropdown-toggle" type="button" id="sortByDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter
                        </button>
                            <div class="dropdown-menu" aria-labelledby="sortByDropdown">
                                <button class="dropdown-item" type="button">Date</button>
                                <button class="dropdown-item" type="button">Difficulty</button>
                                <button class="dropdown-item" type="button">Popularity</button>
                        </div>
                    </div>
                </div>
                <div class="boxes">
                {challengeCards.map((challenge, index) => (
                        <ChallengeCard key={index} {...challenge} />
                    ))}
                </div>
            </div>
        );
    }
}
