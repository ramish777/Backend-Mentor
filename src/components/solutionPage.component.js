import React, { Component } from "react";
import '../css/challengePage.css';

const SolutionCard = ({id, title, language, level, description }) => (
    <div className="box">
        <h2>{title}</h2>
        <div className="oneLine">
            <p className="language">{language}</p>
            <p>{level}</p>
        </div>
        <p>{description}</p>
        <a href={`https://github.com/ramish777`} target="_blank" rel="noopener noreferrer">
            <button className="try-now">Check it out</button>
        </a>
    </div> 
);

export default class solutionPage extends Component {
    constructor(props){
        super(props);

        //declaring variables that will be used
        this.state = {
            solutionCards: [
                {id: 1, title: "Title 1", language: "HTML/CSS", level: "Basic", description: "Brief Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                {id: 2, title: "Title 2", language: "JavaScript", level: "Intermediate", description: "Another Brief Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                {id: 3, title: "Title 3", language: "HTML/CSS", level: "Basic", description: "Brief Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                {id: 4, title: "Title 4", language: "JavaScript", level: "Intermediate", description: "Another Brief Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                // Add more challenge card data here as needed
            ]
        };
    }

    render() {

        const { solutionCards } = this.state;

        return (
            <div className="challenge-page">
                <div className="content">
                    <div className="title">Solutions</div>
                </div>
                <div class="boxes">
                {solutionCards.map((solution, index) => (
                        <SolutionCard key={index} {...solution} />
                    ))}
                </div>
            </div>
        );
    }
}
